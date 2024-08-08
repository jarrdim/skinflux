import bcrypt from "bcrypt";
import prisma from '@/lib/prismadb';
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  }
   catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}

// export async function POST(request: Request)
// {

//     const body = await request.json()
//     const {name, email, password} = body;

//     const hashedPassword  = await bcrypt.hash(password, 10)

//     const user = await prisma.user.create({
//         data:{
//             name, email, hashedPassword
//         },
//     });


//     return NextResponse.json(user)
// }
