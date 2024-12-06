"use client";

import MyProfile from "@/app/layouts/MyProfile";


export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return <MyProfile>{children}</MyProfile>;
}
