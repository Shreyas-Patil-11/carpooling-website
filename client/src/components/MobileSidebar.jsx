
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
