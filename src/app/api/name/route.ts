import { NextResponse } from "next/server";

export async function GET() {
  const members = [
    { id: 1, name: "Rana Jihan S." },
    { id: 2, name: "Citra Hadi N.", image : "/image/tyas.jpg" },
    { id: 3, name: "Aisyatul Khumairoh", absen: 1, image: "/image/tutul.jpg" },
    { id: 4, name: "Naurah Calista Ramadhani", absen: 21 , image : '/image/nura.jpg' },
    { id: 5, name: "Hiyasatakunu A.A.M", absen: 13 },
    { id: 6, name: "Athifa Zaina Anggraeni" },
    { id: 7, name: "Devia Salsabila" , image: "/image/kepik.jpg", absen : 9},
    { id: 8, name: "Hita Tuhu F." },
    {
      id: 9,
      name: "Moch Ridho Zulqornain",
      image:
        "/image/ridho.jpg",
    },
    { id: 10, name: "Naufal Arga Rizky Pratama", absen: 20 },
    { id: 11, name: "Fawwaz Safaraz n" },
    { id: 12, name: "M. Uwaiss Uno Maliki", absen: 18 },
    { id: 13, name: "Kayla Dwiky S." },
  ];

  return NextResponse.json({ status: 200, message: "ok", data: members });
}
