


import { connectDB } from "../../lib/mongodb";
import User from "@/models/User";

//  GET all users
export async function GET() {
  try {
    await connectDB();

    const users = await User.find();

    return Response.json({
      message: "Users fetched successfully",
      users,
    });

  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}


// ✅ POST (your existing code)
export async function POST(req) {
  try {
    const { email, uid } = await req.json();

    await connectDB();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return Response.json({ error: "User already exists" }, { status: 400 });
    }

    const newUser = await User.create({
      email,
      uid,
    });

    return Response.json({
      message: "User saved successfully",
      user: newUser,
    });

  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}