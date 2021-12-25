import React from 'react';

interface StatItemProps {
  name: string;
  value: string;
  unit: string;
}

const StatItem: React.FC<StatItemProps> = (props) => {
  return (
    <div className="flex flex-col p-4 mt-2 rounded-md bg-gray-50 dark:bg-gray-800">
      <span className="text-sm text-gray-400">{props.name}</span>
      <span className="text-2xl font-bold">
        {props.value}
        <span className="ml-1 text-sm text-gray-400">{props.unit}</span>
      </span>
    </div>
  );
};

export const OverviewScreen: React.FC<{}> = (props) => {
  return (
    <div className="flex flex-col w-full h-full p-5 bg-white dark:bg-gray-900">
      <h1 className="text-xl font-bold ">Jamie's Library</h1>
      <div className="flex flex-wrap mt-3 space-x-2">
        <StatItem name="Total capacity" value="26.5" unit="TB" />
        <StatItem name="Index size" value="103" unit="MB" />
        <StatItem name="Preview media" value="23.5" unit="GB" />
        <StatItem name="Free space" value="9.2" unit="TB" />

        <StatItem name="Total at-risk" value="1.5" unit="TB" />
        <StatItem name="Total backed up" value="25.3" unit="TB" />
      </div>
    </div>
  );
};