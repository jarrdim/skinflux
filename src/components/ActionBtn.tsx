"use client";

import React from 'react';
import { IconType } from 'react-icons/lib';

interface BtnProps{
    icon: IconType;
    onClick: () => void;
}
const ActionBtn = ({ icon: Icon, onClick }: BtnProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center p-2 bg-gray-200 rounded hover:bg-gray-300"
    >
      <Icon className="text-gray-700" />
    </button>
  );
};


export default ActionBtn;
