// import { Clock, Hourglass, IndianRupee } from 'lucide-react'
// import React from 'react'
// import { RadioGroup, RadioGroupItem } from './ui/radio-group'
// import { Label } from './ui/label'
// import { Checkbox } from './ui/checkbox'


// const Sidebar = () => {

//   const sortBy = [
//     {
//       icon: <IndianRupee size={16}/>,
//       title: "Earliest Departure",
//     },
//     {
//       icon: <Clock size={16}/>,
//       title: "Price",
//     },
//     {
//       icon: <Hourglass size={16}/>,
//       title: "Shortest Ride",
//     },
//   ]

//   const departureTime = [
//     {
//       name: "departure_before_six_am",
//       title: "Before 6:00",
//     },
//     {
//       name: "departure_six_to_noon",
//       title: "6:00 - 12:00",
//     },
//     {
//       name: "departure_noon_to_six",
//       title: "12:00 - 18:00",
//     },
//   ]

//   return (
//     <aside className='space-y-4 py-4'>
//       <div className='px-3 py-2'>
//         <div className='flex items-center justify-between'>
//           <h2 className='mb-2 px-4 text-lg font-semibold'>Sort by</h2>
//           <span className='mb-2 px-4 text-sm text-primary text-right underline cursor-pointer'>Clear Filter</span>
//         </div>
//         <RadioGroup>
//           {sortBy.map(s => 
//             <Label 
//               key={s.title} 
//               htmlFor={s.title} 
//               className="flex gap-2 items-center justify-between rounded-md bg-popover p-4 hover:bg-accent hover:text-accent-foreground">
//                 {s.icon}
//                 {s.title}
//                 <RadioGroupItem
//                  value= {s.title}
//                  className="ml-auto"
//                  id={s.title}
//                 />
//             </Label>
//           )}
//         </RadioGroup>
//       </div>

//       <div className='px-3 py-2'>
//           <h2 className='mb-2 px-4 text-lg font-semibold'>Departure time</h2>
//           {departureTime.map(d => 
//             <Label 
//               className="flex gap-2 items-center justify-between rounded-md bg-popover p-4 hover:bg-accent hover:text-accent-forground"
//               key={d.title}
//               htmlFor={d.name}
//               aria-label={d.name}
//             >
//               {d.title}
//               <Checkbox
//                 name={d.name}
//                 id={d.name}
//               />
//             </Label>
//           )}
//       </div>
//     </aside>
//   )
// }

// export default Sidebar


import { Clock, Hourglass, IndianRupee } from 'lucide-react'
import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { Checkbox } from './ui/checkbox'

const Sidebar = ({
  sortOption,
  onSortChange,
  departureFilters,
  onDepartureFilterChange,
  onClearFilters
}) => {
  const sortBy = [
    {
      icon: <Clock size={16}/>,
      title: "Earliest Departure",
    },
    {
      icon: <IndianRupee size={16}/>,
      title: "Price",
    },
    {
      icon: <Hourglass size={16}/>,
      title: "Shortest Ride",
    },
  ]

  const departureTime = [
    {
      name: "departure_before_six_am",
      title: "Before 6:00",
    },
    {
      name: "departure_six_to_noon",
      title: "6:00 - 12:00",
    },
    {
      name: "departure_noon_to_six",
      title: "12:00 - 18:00",
    },
  ]

  return (
    <aside className='space-y-4 py-4'>
      <div className='px-3 py-2'>
        <div className='flex items-center justify-between'>
          <h2 className='mb-2 px-4 text-lg font-semibold'>Sort by</h2>
          <span 
            className='mb-2 px-4 text-sm text-primary text-right underline cursor-pointer'
            onClick={onClearFilters}
          >
            Clear Filter
          </span>
        </div>
        <RadioGroup value={sortOption} onValueChange={onSortChange}>
          {sortBy.map(s => 
            <Label 
              key={s.title} 
              htmlFor={s.title} 
              className="flex gap-2 items-center justify-between rounded-md bg-popover p-4 hover:bg-accent hover:text-accent-foreground">
                <div className="flex items-center gap-2">
                  {s.icon}
                  <span>{s.title}</span>
                </div>
                <RadioGroupItem
                 value={s.title}
                 className="ml-auto"
                 id={s.title}
                />
            </Label>
          )}
        </RadioGroup>
      </div>

      <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold'>Departure time</h2>
          {departureTime.map(d => 
            <Label 
              className="flex gap-2 items-center justify-between rounded-md bg-popover p-4 hover:bg-accent hover:text-accent-forground"
              key={d.title}
              htmlFor={d.name}
              aria-label={d.name}
            >
              {d.title}
              <Checkbox
                name={d.name}
                id={d.name}
                checked={departureFilters[d.name]}
                onCheckedChange={(checked) => onDepartureFilterChange(d.name, checked)}
              />
            </Label>
          )}
      </div>
    </aside>
  )
}

export default Sidebar