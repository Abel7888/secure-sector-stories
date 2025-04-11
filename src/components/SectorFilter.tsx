
import React from 'react';
import { cn } from '@/lib/utils';
import { Sector } from '@/lib/blogData';
import { Button } from '@/components/ui/button';
import { Shield, Building2, Landmark, Truck } from 'lucide-react';

interface SectorFilterProps {
  selectedSector: Sector | 'all';
  setSelectedSector: (sector: Sector | 'all') => void;
}

interface SectorOption {
  id: Sector | 'all';
  name: string;
  icon: React.ElementType;
}

const sectorOptions: SectorOption[] = [
  { id: 'all', name: 'All Sectors', icon: Shield },
  { id: 'healthcare', name: 'Healthcare', icon: Shield },
  { id: 'finance', name: 'Finance', icon: Landmark },
  { id: 'realestate', name: 'Real Estate', icon: Building2 },
  { id: 'supplychain', name: 'Supply Chain', icon: Truck },
];

const SectorFilter: React.FC<SectorFilterProps> = ({ selectedSector, setSelectedSector }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {sectorOptions.map((option) => (
        <Button
          key={option.id}
          variant={selectedSector === option.id ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedSector(option.id)}
          className={cn(
            "flex items-center gap-1.5",
            selectedSector === option.id && option.id !== 'all' && 
            `bg-sector-${option.id} hover:bg-sector-${option.id}/90`
          )}
        >
          <option.icon className="h-4 w-4" />
          {option.name}
        </Button>
      ))}
    </div>
  );
};

export default SectorFilter;
