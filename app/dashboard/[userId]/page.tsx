'use client'

import Content from "@/components/Content";
import axios from "axios";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button"

function ButtonDestructive() {
  return <Button onClick={() =>
    signOut({
      redirect: true,
      callbackUrl: "/",
    })
  } variant="destructive">Log Out</Button>
}


export default function Page({
  params,
}: {
  params: {
    userId: string;
  };
}) {

  const [proposals, setProposals] = useState<{
    content: string,
    id: String,
    title: string,
    userId: string
  }[]>()

  useEffect(() => {
    async function init() {
      const axiosData = await axios.get(`https://drafton.vercel.app/api/proposals?userId=${params.userId}`)
      setProposals(axiosData.data.proposals)
    }
    init()
  }, [])

  return (
    <main className="bg-black min-h-screen h-full flex flex-col justify-center items-center">
      <h2 className="text-white text-3xl font-semibold px-2 pt-1">Here are your proposals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 gap-5">
        {proposals?.map((proposal, index) => <Content key={index} templateId={(index + 1).toString()} content={proposal.content} />)}
      </div>
      <ButtonDestructive />
    </main>
  );
}
