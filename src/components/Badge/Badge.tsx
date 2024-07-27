import React from 'react';
import Image from 'next/image';
import './Badge.scss';

import { FC } from "react";

type badge = {
  name: string;
  image: string;
  title: string;
}

interface BadgeProps {
  badge: badge
}

const Badge: FC<BadgeProps> = ({ badge }) => {
  return (
    <div className={`badge badge--${badge.name} h-[1.25rem] flex items-center gap-1 px-2 py-3.5`}>
      <Image src={badge.image} alt={`${badge.name} icon`} width={12} height={12} className='badge__icon'/>
      <p className="badge__text">{badge.title}</p>
    </div>
  )
}

export default Badge