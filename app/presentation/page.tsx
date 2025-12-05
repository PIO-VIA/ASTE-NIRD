'use client'
import React, { useState } from 'react'
import Tiles from '../../components/TIles'
import Navbar from '@/components/ui/Navbar'
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
    title: "1. Introduction — What is NIRD?",
    paragraphs: [
      { text: `La démarche <strong class="text-nird-gold font-bold">NIRD</strong> est un mouvement éducatif qui vise à aider les établissements scolaires à adopter un numérique <em class="text-nird-gold italic">plus libre</em>, <em class="text-nird-gold italic">plus éthique</em> et <em class="text-nird-gold italic">plus durable</em>.` },
      { text: `Elle rassemble <strong class="text-nird-gold font-bold">enseignants</strong>, <strong class="text-nird-gold font-bold">élèves</strong>, <strong class="text-nird-gold font-bold">techniciens</strong>, <strong class="text-nird-gold font-bold">collectivités</strong> et <strong class="text-nird-gold font-bold">associations</strong> pour construire un numérique réellement au service de l’éducation.` }
    ]
  },
  {
    title: "2. Why NIRD? — Why does it matter?",
    paragraphs: [
      { text: `Aujourd’hui, de nombreux établissements dépendent fortement des grandes entreprises technologiques. Cette dépendance crée des situations problématiques :<br/><br/>
      • du matériel encore fonctionnel devient <strong class="text-nird-gold font-bold">inutilisable</strong> à cause d’une mise à jour,<br/>
      • les licences logicielles pèsent lourd dans les budgets,<br/>
      • les données scolaires sont stockées hors d’Europe,<br/>
      • les écosystèmes fermés empêchent les écoles d’adapter ou de réparer leurs outils.` },
      { text: `Face à ces contraintes, <strong class="text-nird-gold font-bold">NIRD propose un autre chemin</strong> : reprendre le pouvoir sur l’environnement numérique, réduire l’impact écologique et développer des pratiques plus <strong class="text-nird-gold font-bold">autonomes</strong> et <strong class="text-nird-gold font-bold">durables</strong>.` }
    ]
  },
  {
    title: "3. The Three Pillars of NIRD",
    paragraphs: [
      { text: `<strong class="text-nird-gold font-bold">Inclusion :</strong> réduire les inégalités numériques, garantir l’accès pour tous, utiliser des outils accessibles et gratuits.` },
      { text: `<strong class="text-nird-gold font-bold">Responsibility :</strong> limiter l’empreinte carbone, consommer moins de ressources numériques, favoriser des outils respectueux des données.` },
      { text: `<strong class="text-nird-gold font-bold">Durability :</strong> prolonger la durée de vie du matériel, lutter contre l’obsolescence programmée, encourager le libre et la réparation.` }
    ]
  },
  {
    title: "4. NIRD’s Main Actions (the 6 activities)",
    paragraphs: [
      { text: `<strong class="text-nird-gold font-bold">1. Sensibiliser à la sobriété numérique</strong> — Éduquer sur l’impact énergétique, encourager des usages raisonnés : stockage responsable, streaming limité, optimisation des appareils.` },
      { text: `<strong class="text-nird-gold font-bold">2. Réemploi & reconditionnement</strong> — Réparer et réutiliser plutôt que jeter : réduire les déchets électroniques et économiser des ressources.` },
      { text: `<strong class="text-nird-gold font-bold">3. Promouvoir Linux</strong> — Allonger la durée de vie du matériel, réduire les coûts, favoriser les logiciels libres et sécurisés.` },
      { text: `<strong class="text-nird-gold font-bold">4. Mutualiser les outils libres</strong> — Partager des ressources, guides et logiciels via <em class="text-nird-gold italic">La Forge des communs numériques éducatifs</em>.` },
      { text: `<strong class="text-nird-gold font-bold">5. Accompagner la transition écoresponsable</strong> — Conseils techniques, ateliers, guides pratiques, aide aux collectivités.` },
      { text: `<strong class="text-nird-gold font-bold">6. Co-construire des solutions locales</strong> — Créer des outils adaptés : applications, ressources pédagogiques, infrastructures locales.` }
    ]
  },
  {
    title: "5. Interactive Section — Scenario",
    paragraphs: [
      { text: `Mini-simulation <strong class="text-nird-gold font-bold">“Choisissez votre école numérique”</strong> — Les visiteurs doivent choisir :` },
      { text: `<ul class="list-disc ml-6"><li>Système : <strong class="text-nird-gold font-bold">Linux</strong> ou <strong class="text-nird-gold font-bold">Windows</strong></li><li>Réparer ou acheter un nouvel ordinateur ?</li><li>Cloud européen ou américain ?</li><li>Logiciel libre ou propriétaire ?</li></ul>` },
      { text: `Chaque choix affiche un impact : <span class="text-green-400">🟢 +2 Durabilité</span>, <span class="text-yellow-300">🟡 +1 Responsabilité</span>, <span class="text-red-400">🔴 –2 Inclusion</span>` },
      { text: `<strong class="text-nird-gold font-bold">Score final :</strong> Votre école est <span class="text-nird-gold font-bold">73% NIRD-compatible</span> !` }
    ]
  },
  {
    title: "6. Tools & Resources",
    paragraphs: [
      { text: `<strong class="text-nird-gold font-bold">Outils libres recommandés :</strong><br/>Linux Mint / Ubuntu Éducation, LibreOffice, Moodle, Etherpad / Cryptpad, Firefox ESR.` },
      { text: `<strong class="text-nird-gold font-bold">Guides utiles :</strong> prolonger la durée de vie d’un PC, installer Linux, adopter des pratiques de sobriété numérique.` },
      { text: `<strong class="text-nird-gold font-bold">Ressources NIRD :</strong> Forge des communs, fiches pédagogiques, tutoriels de reconditionnement.` }
    ]
  },
  {
    title: "7. Call to Action — Join the Movement",
    paragraphs: [
      { text: `Rejoignez la communauté <strong class="text-nird-gold font-bold">NIRD</strong> et contribuez à construire un numérique éthique, durable et accessible.` },
      { text: `<div class="flex gap-3 mt-4">
          <button class="bg-green-600 px-4 py-2 rounded-md text-white">Découvrir les outils libres</button>
          <button class="bg-blue-600 px-4 py-2 rounded-md text-white">Tester la simulation</button>
          <button class="bg-orange-600 px-4 py-2 rounded-md text-white">Participer</button>
          <button class="bg-purple-600 px-4 py-2 rounded-md text-white">Télécharger les guides</button>
        </div>` }
    ]
  }
];


  const visible: boolean[] = [true,false,false,true,false,false,true,true,true,false,false,true,false,false,true]
  const labels: string[] = ['Start','Next','Next','Next','','','Next','Next','Next','','','Next','','','End']
  const tileToSection: { [key: number]: number } = { 0:0,3:1,6:2,7:3,8:4,11:5,14:6 }

  const icons = [
    <Home key={0} size={75} strokeWidth={1}  />,
    <Book key={1} size={75} strokeWidth={1} />,
    <Cpu key={2} size={75} strokeWidth={1} />,
    <Star key={3} size={75} strokeWidth={1} />,
    <Flag key={4} size={75} strokeWidth={1} />,
    <Settings key={5} size={75} strokeWidth={1} />,
    <Monitor key={6} size={75} strokeWidth={1} />
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
  <div className="flex flex-col">
    <Navbar />

    <div className="flex h-full p-10 gap-10 mt-10 bg-nird-night">

      {/* Left panel */}
      <div
        className={
          sections[clickedIndex].containerClassName ||
          "flex justify-center w-200 p-6 bg-nird-night text-white rounded-md overflow-y-auto"
        }
      >
        <div className="flex gap-5 flex-col items-center">
          <h2
            className={
              sections[clickedIndex].titleClassName ||
              "text-4xl font-bold mb-4 text-nird-gold"
            }
          >
            {sections[clickedIndex].title}
          </h2>

          {sections[clickedIndex].paragraphs.map((p, i) => (
            <p
              key={i}
              className={p.className || "text-white mb-3 text-2xl w-[60%] leading-relaxed"}
              dangerouslySetInnerHTML={{ __html: p.text }}
            />
          ))}
        </div>
      </div>

      {/* Tile grid */}
      <div className="m-10 flex justify-center items-center h-screen">
        <div className="rotate-45">
          <div className="grid grid-cols-3 gap-5">
            {visible.map((show, i) =>
              show ? (
                <div key={i} onClick={() => handleTileClick(i)}>
                  <Tiles
                    icon={icons[tileToSection[i] ?? 0]}
                    label={i === hoverIndex ? labels[i] : undefined}
                  />
                </div>
              ) : (
                <div key={i} className="w-35 h-35" />
              )
            )}
          </div>
        </div>
      </div>

    </div>
  </div>
);

}

export default Page
