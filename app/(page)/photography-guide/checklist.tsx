import React from 'react'

export default function SenaraiSemak(){
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-black/80 p-6 rounded-lg">
      <div>
        <h3 className="text-xl font-bold mb-3 text-blue-500">EXTERIOR</h3>
        <ul className="space-y-2 text-gray-300">
          <li>• HERO IMAGES - Wide shots, Scenic shots, Rolling shots, Panning shots</li>
          <li>• 360° COVERAGE - Front, Rear, Side ons, Front and Rear 3/4s</li>
          <li>• HEADLIGHTS & REARLIGHTS</li>
          <li>• DETAILS, BADGES, GRILLES</li>
          <li>• EXHAUST PIPES</li>
          <li>• WHEELS (Shot individually)</li>
          <li>• BRAKE CALIPERS</li>
          <li>• WING MIRRORS, DOORS, HANDLES</li>
          <li>• UNDERBODY & CHASSIS</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-3 text-blue-500">INTERIOR</h3>
        <ul className="space-y-2 text-gray-300">
          <li>• WIDE INTERIOR SHOT</li>
          <li>• STEERING WHEEL</li>
          <li>• DASHBOARD & ODOMETER</li>
          <li>• INSTRUMENTS</li>
          <li>• PEDALS</li>
          <li>• FRONT & REAR SEATS</li>
          <li>• DETAILING - Stitching, Seat adjusters, Bolsters & Belts</li>
          <li>• FOOTWELLS</li>
          <li>• ROOF LINING</li>
          <li>• BOOT & LATCHES</li>
          <li>• TOOLKITS & SPARES</li>
        </ul>
      </div>
              
        <div>
          <h3 className="text-xl font-bold mb-3 text-blue-500">MECHANICAL & DOCUMENTATION</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• ENGINE AS A WHOLE</li>
            <li>• DETAILS AND PARTS</li>
            <li>• COVER AND LATCHES</li>
            <li>• ENGINE & CHASSIS NUMBERS</li>
            <li>• KEYS AND SPARES</li>
            <li>• SERVICE BOOKS & STAMPS</li>
            <li>• MAINTENANCE RECORDS</li>
            <li>• WARRANTY BOOKLETS</li>
            <li>• VIN & CHASSIS NUMBERS</li>
            <li>• V5</li>
            <li>• ANY OTHER RELEVANT MATERIAL</li>
          </ul>
        </div>
      </div>

      <div className="bg-black/80 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3 text-blue-500">VIDEO (MOBILE OR CAMERA)</h3>
        <ul className="space-y-2 text-gray-300">
          <li>• LANDSCAPE WALK-AROUND VIDEO</li>
          <li>• LANDSCAPE CAR START UP VIDEO</li>
          <li>• PORTRAIT VIDEO OF THE CAR & DETAIL</li>
        </ul>
        <p className="mt-4 text-gray-300 max-w-xl">
          Video kandungan sangat meningkatkan penyenaraian anda dengan memberikan pandangan dinamik kenderaan
          anda. Pastikan untuk merakam video dalam orientasi landskap untuk walk-around dan start-up, dan
          orientasi potret untuk detail.
        </p>
      </div>
    </>
  )
}