import { NextResponse } from "next/server";

//basic route handler
export function GET() {
    return NextResponse.json({
        hello : "trello",
    })
}