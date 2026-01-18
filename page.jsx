
'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Search } from "lucide-react";

const properties = [
  { id: 1, title: "Oceanfront Signature Villa", location: "Diani Beach", price: "$4,800,000", tag: "Featured" },
  { id: 2, title: "Skyline Penthouse", location: "Nairobi", price: "$1,950,000", tag: "Exclusive" },
  { id: 3, title: "Private Estate", location: "Karen", price: "$3,200,000", tag: "Luxury" }
];

export default function Page() {
  const [search, setSearch] = useState("");
  const filtered = properties.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", fontFamily: "Arial" }}>
      <header style={{ padding: 20, borderBottom: "1px solid #222" }}>
        <h1 style={{ color: "#81D8D0", letterSpacing: 4 }}>SERINE LUXURY</h1>
      </header>

      <section style={{ padding: 60, textAlign: "center" }}>
        <motion.h2 initial={{opacity:0}} animate={{opacity:1}}>
          Where Luxury Becomes a Lifestyle
        </motion.h2>
      </section>

      <section style={{ padding: 20 }}>
        <Card className="bg-[#111] p-4">
          <CardContent className="flex gap-2">
            <Search size={16} />
            <Input placeholder="Search properties..." value={search} onChange={e => setSearch(e.target.value)} />
          </CardContent>
        </Card>
      </section>

      <section style={{ padding: 40 }}>
        <h3>Listings</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))", gap: 20 }}>
          {filtered.map(p => (
            <Card key={p.id} className="bg-[#111] p-6">
              <Badge className="bg-[#81D8D0] text-black">{p.tag}</Badge>
              <h4>{p.title}</h4>
              <p>{p.location}</p>
              <p style={{ color: "#81D8D0" }}>{p.price}</p>
              <Button className="bg-[#81D8D0] text-black">View</Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
