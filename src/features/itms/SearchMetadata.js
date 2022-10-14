import React from 'react'
import { useSelector } from 'react-redux';

export default function SearchMetadata({ itms }) {
  const { nbHits } = itms;
    return (
    <div className="border border-green-600 lg:flex justify-between  items-center  w-full px-1 py-1 sm:grid-cols-2 ">
      <div className="px-1 py-1">{nbHits} results found</div>
      <div className="flex justify-between  gap-2 px-1 py-1">
        <div className="px-1 py-1">
          Search Type: {useSelector((state) => state.itms.searchType)}
        </div>
        <div className="px-1 py-1">
          Order: {useSelector((state) => state.itms.sortOrder)}
        </div>
        <div className="px-1 py-1">
          Date Range: {useSelector((state) => state.itms.dataRange)}
        </div>
        <div className="px-1 py-1">
          Hits Per Page: {useSelector((state) => state.itms.hitsPerPage)}
        </div>
      </div>
    </div>
  );
}
