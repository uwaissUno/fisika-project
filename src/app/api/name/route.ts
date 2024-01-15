import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest , res : NextResponse) {
  const members = [
    { id: 1, name: "rana jihan s" },
    { id: 2, name: "citra hadi n" },
    { id: 3, name: "aisyatul khumairoh" },
    { id: 4, name: "naurah calista ramadhani" },
    { id: 5, name: "hiyasatakunu a.a.m" },
    { id: 6, name: "athifa zaina anggraeni" },
    { id: 7, name: "devia salsabila" },
    { id: 8, name: "hita tuhu f" },
    { id: 9, name: "Moch ridho zulqornain" },
    { id: 10, name: "naufal arga rizky pratama" },
    { id: 11, name: "fawwaz safaraz n" },
    { id: 12, name: "M. Uwaiss Uno Maliki" },
  ];
  return NextResponse.json({status : 200 , message : 'ok', data : members});
}