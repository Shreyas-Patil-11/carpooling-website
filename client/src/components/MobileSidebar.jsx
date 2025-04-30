// import { useState } from 'react';
// import { ChevronDown, ChevronUp, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Label } from '@/components/ui/label';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Separator } from '@/components/ui/separator';

// const MobileSidebar = ({ 
//   sortOption, 
//   onSortChange, 
//   departureFilters, 
//   onDepartureFilterChange, 
//   onClearFilters 
// }) => {
//   const [expandedSection, setExpandedSection] = useState('sort');

//   const toggleSection = (section) => {
//     setExpandedSection(expandedSection === section ? null : section);
//   };

//   return (
//     <div className="px-1 py-2">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="font-semibold text-lg">Filters</h3>
//         <Button 
//           variant="ghost" 
//           size="sm" 
//           onClick={onClearFilters}
//           className="text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
//         >
//           Clear all
//         </Button>
//       </div>

//       {/* Sort options */}
//       <div className="mb-3">
//         <button 
//           className="w-full flex justify-between items-center p-2 hover:bg-[hsl(var(--accent-teal),0.05)] rounded-lg transition-colors"
//           onClick={() => toggleSection('sort')}
//         >
//           <span className="font-medium">Sort by</span>
//           {expandedSection === 'sort' ? 
//             <ChevronUp className="h-4 w-4 text-[hsl(var(--muted-foreground))]" /> : 
//             <ChevronDown className="h-4 w-4 text-[hsl(var(--muted-foreground))]" />
//           }
//         </button>
        
//         {expandedSection === 'sort' && (
//           <div className="mt-2 pl-2">
//             <RadioGroup 
//               value={sortOption} 
//               onValueChange={onSortChange}
//             >
//               {['Earliest Departure', 'Price', 'Shortest Ride'].map((option) => (
//                 <div key={option} className="flex items-center space-x-2 mb-2">
//                   <RadioGroupItem value={option} id={`option-${option}`} />
//                   <Label htmlFor={`option-${option}`} className="cursor-pointer">{option}</Label>
//                 </div>
//               ))}
//             </RadioGroup>
//           </div>
//         )}
//       </div>

//       <Separator className="my-3 bg-[hsl(var(--accent-teal),0.1)]" />

//       {/* Departure time filters */}
//       <div className="mb-3">
//         <button 
//           className="w-full flex justify-between items-center p-2 hover:bg-[hsl(var(--accent-teal),0.05)] rounded-lg transition-colors"
//           onClick={() => toggleSection('departure')}
//         >
//           <span className="font-medium">Departure time</span>
//           {expandedSection === 'departure' ? 
//             <ChevronUp className="h-4 w-4 text-[hsl(var(--muted-foreground))]" /> : 
//             <ChevronDown className="h-4 w-4 text-[hsl(var(--muted-foreground))]" />
//           }
//         </button>
        
//         {expandedSection === 'departure' && (
//           <div className="mt-2 pl-2">
//             {[
//               { id: 'departure_before_six_am', label: 'Before 6:00 AM' },
//               { id: 'departure_six_to_noon', label: '6:00 AM to 12:00 PM' },
//               { id: 'departure_noon_to_six', label: '12:00 PM to 6:00 PM' }
//             ].map((filter) => (
//               <div key={filter.id} className="flex items-center space-x-2 mb-2">
//                 <Checkbox 
//                   id={`mobile-${filter.id}`}
//                   checked={departureFilters[filter.id]} 
//                   onCheckedChange={(checked) => onDepartureFilterChange(filter.id, checked)}
//                 />
//                 <Label htmlFor={`mobile-${filter.id}`} className="cursor-pointer">{filter.label}</Label>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="mt-6 flex justify-end">
//         <Button className="bg-[hsl(var(--primary-blue))] text-white hover:bg-[hsl(var(--primary-blue),0.9)]">
//           Apply Filters
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default MobileSidebar;

// @/components/MobileSidebar.jsx
// import { useState } from 'react';
// import { ChevronDown, ChevronUp } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Label } from '@/components/ui/label';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Separator } from '@/components/ui/separator';

// const MobileSidebar = ({ 
//   sortOption, 
//   onSortChange, 
//   departureFilters, 
//   onDepartureFilterChange, 
//   onClearFilters,
//   onApplyFilters
// }) => {
//   const [expandedSection, setExpandedSection] = useState('sort');

//   const toggleSection = (section) => {
//     setExpandedSection(expandedSection === section ? null : section);
//   };

//   return (
//     <div className="px-1 py-2">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="font-semibold text-lg">Filters</h3>
//         <Button 
//           variant="ghost" 
//           size="sm" 
//           onClick={onClearFilters}
//           className="text-black text-xs  hover:text-[hsl(var(--foreground))]"
//         >
//           Clear all
//         </Button>
//       </div>

//       {/* Sort options */}
//       <div className="mb-3">
//         <button 
//           className="w-full flex justify-between items-center py-2 text-[hsl(var(--foreground))] font-medium"
//           onClick={() => toggleSection('sort')}
//         >
//           Sort by
//           {expandedSection === 'sort' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
//         </button>
//         {expandedSection === 'sort' && (
//           <div className="pl-4 mt-2">
//             <RadioGroup value={sortOption} onValueChange={onSortChange}  className="accent-[hsl(var(--primary-blue))]">
//               <div className="flex items-center space-x-2 mb-2">
//                 <RadioGroupItem value="Earliest Departure" id="earliest" />
//                 <Label htmlFor="earliest" className="text-sm">Earliest Departure</Label>
//               </div>
//               <div className="flex items-center space-x-2 mb-2">
//                 <RadioGroupItem value="Price" id="price" />
//                 <Label htmlFor="price" className="text-sm">Price</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <RadioGroupItem value="Shortest Ride" id="shortest" />
//                 <Label htmlFor="shortest" className="text-sm">Shortest Ride</Label>
//               </div>
//             </RadioGroup>
//           </div>
//         )}
//       </div>

//       <Separator className="my-4" />

//       {/* Departure filters */}
//       <div>
//         <button 
//           className="w-full flex justify-between items-center py-2 text-[hsl(var(--foreground))] font-medium"
//           onClick={() => toggleSection('departure')}
//         >
//           Departure Time
//           {expandedSection === 'departure' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
//         </button>
//         {expandedSection === 'departure' && (
//           <div className="pl-4 mt-2">
//             <div className="flex items-center space-x-2 mb-2">
//               <Checkbox 
//                 id="before6am" 
//                 checked={departureFilters.departure_before_six_am} 
//                 onCheckedChange={(checked) => onDepartureFilterChange('departure_before_six_am', checked)} 
//               />
//               <Label htmlFor="before6am" className="text-sm">Before 6 AM</Label>
//             </div>
//             <div className="flex items-center space-x-2 mb-2">
//               <Checkbox 
//                 id="6amToNoon" 
//                 checked={departureFilters.departure_six_to_noon} 
//                 onCheckedChange={(checked) => onDepartureFilterChange('departure_six_to_noon', checked)} 
//               />
//               <Label htmlFor="6amToNoon" className="text-sm">6 AM - Noon</Label>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Checkbox 
//                 id="noonTo6pm" 
//                 checked={departureFilters.departure_noon_to_six} 
//                 onCheckedChange={(checked) => onDepartureFilterChange('departure_noon_to_six', checked)} 
//               />
//               <Label htmlFor="noonTo6pm" className="text-sm">Noon - 6 PM</Label>
//             </div>
//           </div>
//         )}
//       </div>

//       <Separator className="my-6" />

//       <Button 
//         className="w-full bg-[hsl(var(--accent-teal))] hover:bg-[hsl(var(--accent-teal),0.9)] text-white font-semibold"
//         onClick={onApplyFilters}
//       >
//         Apply Filters
//       </Button>
//     </div>
//   );
// };

// export default MobileSidebar;


// @/components/MobileSidebar.jsx
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

const MobileSidebar = ({ 
  sortOption, 
  onSortChange, 
  departureFilters, 
  onDepartureFilterChange, 
  onClearFilters,
  onApplyFilters
}) => {
  const [expandedSection, setExpandedSection] = useState('sort');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="px-1 py-2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Filters</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onClearFilters}
          className="text-black text-xs hover:text-[hsl(var(--foreground))]"
        >
          Clear all
        </Button>
      </div>

      {/* Sort options */}
      <div className="mb-3">
        <button 
          className="w-full flex justify-between items-center py-2 text-[hsl(var(--foreground))] font-medium"
          onClick={() => toggleSection('sort')}
        >
          Sort by
          {expandedSection === 'sort' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSection === 'sort' && (
          <div className="pl-4 mt-2">
            <RadioGroup value={sortOption} onValueChange={onSortChange}>
  <div className="flex items-center space-x-2 mb-2">
    <RadioGroupItem 
      value="Earliest Departure" 
      id="earliest" 
      className="accent-blue-500" 
    />
    <Label htmlFor="earliest" className="text-sm">Earliest Departure</Label>
  </div>
  <div className="flex items-center space-x-2 mb-2">
    <RadioGroupItem 
      value="Price" 
      id="price" 
      className="accent-blue-500" 
    />
    <Label htmlFor="price" className="text-sm">Price</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem 
      value="Shortest Ride" 
      id="shortest" 
      className="accent-blue-500" 
    />
    <Label htmlFor="shortest" className="text-sm">Shortest Ride</Label>
  </div>
</RadioGroup>

          </div>
        )}
      </div>

      <Separator className="my-4" />

      {/* Departure filters */}
      <div>
        <button 
          className="w-full flex justify-between items-center py-2 text-[hsl(var(--foreground))] font-medium"
          onClick={() => toggleSection('departure')}
        >
          Departure Time
          {expandedSection === 'departure' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSection === 'departure' && (
          <div className="pl-4 mt-2">
            <div className="flex items-center space-x-2 mb-2">
              <Checkbox 
              className="accent-blue-500" 
                id="before6am" 
                checked={departureFilters.departure_before_six_am} 
                onCheckedChange={(checked) => onDepartureFilterChange('departure_before_six_am', checked)} 
              />
              <Label htmlFor="before6am" className="text-sm">Before 6 AM</Label>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Checkbox 
              className="accent-blue-500" 
                id="6amToNoon" 
                checked={departureFilters.departure_six_to_noon} 
                onCheckedChange={(checked) => onDepartureFilterChange('departure_six_to_noon', checked)} 
              />
              <Label htmlFor="6amToNoon" className="text-sm">6 AM - Noon</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
              className="accent-blue-500" 
                id="noonTo6pm" 
                checked={departureFilters.departure_noon_to_six} 
                onCheckedChange={(checked) => onDepartureFilterChange('departure_noon_to_six', checked)} 
              />
              <Label htmlFor="noonTo6pm" className="text-sm">Noon - 6 PM</Label>
            </div>
          </div>
        )}
      </div>

      <Separator className="my-6" />

      <Button 
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold"
        onClick={onApplyFilters}
      >
        Apply Filters
      </Button>
    </div>
  );
};

export default MobileSidebar;
