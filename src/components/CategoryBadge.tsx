
import React from 'react';
import { cn } from '@/lib/utils';
import { Sector, ContentType } from '@/lib/blogData';

interface CategoryBadgeProps {
  type: 'sector' | 'contentType';
  value: Sector | ContentType;
  className?: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ type, value, className }) => {
  const getSectorStyles = (sector: Sector) => {
    switch (sector) {
      case 'healthcare':
        return 'bg-sector-healthcare/10 text-sector-healthcare border-sector-healthcare/20';
      case 'finance':
        return 'bg-sector-finance/10 text-sector-finance border-sector-finance/20';
      case 'realestate':
        return 'bg-sector-realestate/10 text-sector-realestate border-sector-realestate/20';
      case 'supplychain':
        return 'bg-sector-supplychain/10 text-sector-supplychain border-sector-supplychain/20';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getContentTypeStyles = (contentType: ContentType) => {
    switch (contentType) {
      case 'blog':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'insight':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getLabel = (value: Sector | ContentType) => {
    switch (value) {
      case 'healthcare':
        return 'Healthcare';
      case 'finance':
        return 'Finance';
      case 'realestate':
        return 'Real Estate';
      case 'supplychain':
        return 'Supply Chain';
      case 'blog':
        return 'Blog';
      case 'case-study':
        return 'Case Study';
      case 'insight':
        return 'Insight';
      default:
        return value;
    }
  };

  const styles = type === 'sector' 
    ? getSectorStyles(value as Sector) 
    : getContentTypeStyles(value as ContentType);

  return (
    <span 
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        styles,
        className
      )}
    >
      {getLabel(value)}
    </span>
  );
};

export default CategoryBadge;
