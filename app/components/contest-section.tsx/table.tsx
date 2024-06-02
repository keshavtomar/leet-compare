import React from 'react'

import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { DEFAULT_OPTIONS, getTheme } from '@table-library/react-table-library/material-ui';

const nodes = [
  {
    id: '0',
    name: 'Shopping List',
    deadline: new Date(2020, 1, 15),
    type: 'TASK',
    isComplete: true,
    nodes: 3,
  },
];
const key = 'Compact Table';


type propstype = {
  tabledata:{
    attendedContestsCount:number,
    badge: null | {
      name:string,
    }
    globalRanking:number,
    rating:number,
    topPercentage:number,
    totalParticipants: number,
  }
  id:string;
}

export default function Table({tabledata, id}: propstype) {
  const theme = useTheme(getTheme());
  const data = { nodes };
  return <CompactTable data={data} theme={theme} />;
}
