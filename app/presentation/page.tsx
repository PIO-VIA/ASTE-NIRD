'use client'
import React, { useState } from 'react'
import Tiles from '../../components/TIles'
import { Home, Book, Cpu, Star, Flag, Settings, Monitor } from 'lucide-react'

interface Paragraph {
  text: string
  className?: string
}

interface Content {
  title: string
  titleClassName?: string
  paragraphs: Paragraph[]
  containerClassName?: string
}

const Page: React.FC = () => {
  // ------------------------
  // Sections with style options
  // ------------------------
  const sections: Content[] = [
    {
      title: " What is NIRD?",
      titleClassName: "text-5xl font-bold text-blue-700 mb-4",
      containerClassName: "w-200 p-6 bg-white rounded-md overflow-y-auto",
      paragraphs: [
        { text: "La démarche NIRD est un mouvement éducatif qui vise à aider les établissements scolaires à adopter un numérique plus libre, plus éthique et plus durable.Elle rassemble enseignants, élèves, techniciens, collectivités et associations pour construire un numérique réellement au service de l’éducation.", className: "text-gray-700 mb-3" },
        { text: "Elle rassemble enseignants, élèves, techniciens ...", className: "text-gray-700 mb-3 italic" }
      ]
    },
    {
      title: "2. Why NIRD?",
      paragraphs: [
        { text: "Aujourd’hui ...", className: "text-gray-800 mb-2" },
        { text: "Face à ces contraintes ...", className: "text-gray-800 mb-2" }
      ]
    },
    {
      title: "3. The Three Pillars of NIRD",
      paragraphs: [
        { text: "Inclusion ...", className: "text-gray-700 mb-2" },
        { text: "Responsibility ...", className: "text-gray-700 mb-2" },
        { text: "Durability ...", className: "text-gray-700 mb-2" }
      ]
    },
    {
      title: "4. NIRD’s Main Actions",
      paragraphs: [
        { text: "1. ...", className: "text-gray-600 mb-1" },
        { text: "2. ...", className: "text-gray-600 mb-1" },
        { text: "3. ...", className: "text-gray-600 mb-1" },
        { text: "4. ...", className: "text-gray-600 mb-1" },
        { text: "5. ...", className: "text-gray-600 mb-1" },
        { text: "6. ...", className: "text-gray-600 mb-1" }
      ]
    },
    {
      title: "5. Interactive Section",
      paragraphs: [
        { text: "Mini-simulation ...", className: "text-gray-700 mb-2" },
        { text: "Score final ...", className: "text-gray-700 mb-2 font-bold" }
      ]
    },
    {
      title: "6. Tools & Resources Section",
      paragraphs: [
        { text: "Outils libres ...", className: "text-gray-700 mb-2" },
        { text: "Guides utiles ...", className: "text-gray-700 mb-2" },
        { text: "Ressources NIRD ...", className: "text-gray-700 mb-2" }
      ]
    },
    {
      title: "7. Call to Action",
      paragraphs: [
        { text: "Rejoignez la communauté ...", className: "text-gray-800 mb-2 font-semibold" },
        { text: "Buttons ...", className: "text-gray-800 mb-2" }
      ]
    }
  ]

  const visible: boolean[] = [true,false,false,true,false,false,true,true,true,false,false,true,false,false,true]
  const labels: string[] = ['Start','Next','Next','Next','','','Next','Next','Next','','','Next','','','End']
  const tileToSection: { [key: number]: number } = { 0:0,3:1,6:2,7:3,8:4,11:5,14:6 }

  const icons = [
    <Home key={0} />,
    <Book key={1} />,
    <Cpu key={2} />,
    <Star key={3} />,
    <Flag key={4} />,
    <Settings key={5} />,
    <Monitor key={6} />
  ]

  const [clickedIndex, setClickedIndex] = useState<number>(0)
  const [hoverIndex, setHoverIndex] = useState<number | null>(0)

  const handleTileClick = (index: number) => {
    if (tileToSection[index] !== undefined) setClickedIndex(tileToSection[index])
    let next = index + 1
    while(next < visible.length && (!visible[next] || !labels[next])) next++
    setHoverIndex(next < visible.length ? next : null)
  }

  return (
    <div className="flex h-screen p-10 gap-10">

      {/* Left panel */}
      <div className={sections[clickedIndex].containerClassName || "flex justify-center w-200 p-6 bg-white rounded-md overflow-y-auto"}>
        <div>
          <h2 className={sections[clickedIndex].titleClassName || "text-2xl font-bold mb-4"}>
            {sections[clickedIndex].title}
          </h2>
          {sections[clickedIndex].paragraphs.map((p,i) => (
            <p key={i} className={p.className || "text-gray-700 mb-3"}>{p.text}</p>
          ))}          
        </div>

      </div>

      {/* Tile grid */}
      <div className="m-10 flex justify-center items-center h-screen">
        <div className="rotate-45">
          <div className="grid grid-cols-3 gap-5">
            {visible.map((show,i) => show ? (
              <div key={i} onClick={() => handleTileClick(i)}>
                <Tiles
                  icon={icons[tileToSection[i] ?? 0]}
                  label={i===hoverIndex ? labels[i] : undefined}
                />
              </div>
            ) : (
              <div key={i} className="w-35 h-35" />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Page
