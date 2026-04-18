import clientPromise from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();

  const client = await clientPromise;
  const db = client.db("users");
  const collection = db.collection("users");

  const user = await collection.findOne({ email });

  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return Response.json({ error: "Invalid password" }, { status: 401 });
  }

  const token = jwt.sign(
    { userId: user._id, email: user.email },
    "secret_key",
    { expiresIn: "1d" }
  );

  return Response.json({
    message: "Login successful ✅",
    token,
  });
}