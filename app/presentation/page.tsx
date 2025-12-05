'use client'
import React, { useState } from 'react'
import Tiles from '../../components/TIles'
import Navbar from '@/components/ui/Navbar'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()

  // ------------------------
  // Sections with style options
  // ------------------------
  const sections: Content[] = [
    {
      title: t('presentation_page.section1.title'),
      paragraphs: [
        { text: t('presentation_page.section1.p1') },
        { text: t('presentation_page.section1.p2') }
      ],
      containerClassName: "w-full max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto my-6"
    },
    {
      title: t('presentation_page.section2.title'),
      paragraphs: [
        { text: t('presentation_page.section2.p1') },
        { text: t('presentation_page.section2.p2') }
      ],
      containerClassName: "w-full max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto my-6"
    },
    {
      title: t('presentation_page.section3.title'),
      paragraphs: [
        { text: t('presentation_page.section3.p1') },
        { text: t('presentation_page.section3.p2') },
        { text: t('presentation_page.section3.p3') }
      ],
      containerClassName: "w-full max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto my-6"
    },
    {
      title: t('presentation_page.section4.title'),
      paragraphs: [
        { text: t('presentation_page.section4.p1') },
        { text: t('presentation_page.section4.p2') },
        { text: t('presentation_page.section4.p3') },
        { text: t('presentation_page.section4.p4') },
        { text: t('presentation_page.section4.p5') },
        { text: t('presentation_page.section4.p6') }
      ],
      containerClassName: "w-full max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto my-6"
    },
    {
      title: t('presentation_page.section5.title'),
      paragraphs: [
        { text: t('presentation_page.section5.p1') },
        { text: t('presentation_page.section5.p2') },
        { text: t('presentation_page.section5.p3') },
        { text: t('presentation_page.section5.p4') }
      ],
      containerClassName: "w-full max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto my-6"
    },
    {
      title: t('presentation_page.section6.title'),
      paragraphs: [
        { text: t('presentation_page.section6.p1') },
        { text: t('presentation_page.section6.p2') },
        { text: t('presentation_page.section6.p3') }
      ],
      containerClassName: "w-full max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto my-6"
    },
    {
      title: t('presentation_page.section7.title'),
      paragraphs: [
        { text: t('presentation_page.section7.p1') },
        {
          text: `<div class="flex flex-wrap gap-3 mt-4">
          <button class="bg-green-600 px-4 py-2 rounded-md text-white flex-1 sm:flex-none">${t('presentation_page.section7.btn1')}</button>
          <button class="bg-blue-600 px-4 py-2 rounded-md text-white flex-1 sm:flex-none">${t('presentation_page.section7.btn2')}</button>
          <button class="bg-orange-600 px-4 py-2 rounded-md text-white flex-1 sm:flex-none">${t('presentation_page.section7.btn3')}</button>
          <button class="bg-purple-600 px-4 py-2 rounded-md text-white flex-1 sm:flex-none">${t('presentation_page.section7.btn4')}</button>
        </div>` }
      ],
      containerClassName: "w-full max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto my-6"
    }
  ];



  const visible: boolean[] = [true, false, false, true, false, false, true, true, true, false, false, true, false, false, true]
  const labels: string[] = [t('presentation_page.nav.start'), t('presentation_page.nav.next'), t('presentation_page.nav.next'), t('presentation_page.nav.next'), '', '', t('presentation_page.nav.next'), t('presentation_page.nav.next'), t('presentation_page.nav.next'), '', '', t('presentation_page.nav.next'), '', '', t('presentation_page.nav.end')]
  const tileToSection: { [key: number]: number } = { 0: 0, 3: 1, 6: 2, 7: 3, 8: 4, 11: 5, 14: 6 }

  const icons = [
    <Home key={0} size={75} strokeWidth={1} />,
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
    while (next < visible.length && (!visible[next] || !labels[next])) next++
    setHoverIndex(next < visible.length ? next : null)
  }

  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="flex flex-col h-full p-10 gap-10 mt-10 bg-nird-night sm:flex-row">

        {/* Left panel */}
        <div
          className={
            sections[clickedIndex].containerClassName ||
            "flex justify-center w-200 p-6 bg-nird-night text-white rounded-md overflow-y-auto sm:w-1/2 h-screen"
          }
        >
          <div className="flex gap-5 flex-col items-center sm:items-center sm:justify-center">
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
