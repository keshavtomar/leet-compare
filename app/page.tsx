'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [formitems, setFormItems] = useState({ id: "" });
  const [data, setdata] = useState(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const idValue = (e.currentTarget.elements.namedItem("id") as HTMLInputElement)?.value;

    console.log("Captured input value:", idValue);

    try {
      const res = await fetch('/api/leetcode',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify({id:formitems.id}),
      }) 
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormItems({ ...formitems, id: e.target.value });
  };

  

  return (
    <main className="min-h-screen pt-24">
      <div className="profile-input w-full max-w-[600px] shadow-lg mx-auto">
        <Card>
          <CardContent className="mx-auto w-3/5">
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5 pt-[24px]">
                  <Input
                    id="name"
                    name="id"
                    placeholder="Leetcode handle"
                    value={formitems.id}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <div>Fetched Items</div>
    </main>
  );
}
