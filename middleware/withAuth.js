
import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import { User } from "@/Model/User";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export function withAuth(handler) {
  return async function (req, { params }) {
    const token = req.headers.get("authorization")?.split(" ")[1];

    if (!token) {
      return NextResponse.json(
        { message: "Authentication token not provided" },
        { status: 401 }
      );
    }

    try {
      const { payload } = await jwtVerify(token, secret);
      const user = await User.findById(payload.userId);

      if (!user) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 404 }
        );
      }

      req.user = user;
      return handler(req, { params });
    } catch (error) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 401 }
      );
    }
  };
}
