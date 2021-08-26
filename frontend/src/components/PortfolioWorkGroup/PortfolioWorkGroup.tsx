import React from 'react';
import { PortfolioWork } from '../PortfolioWork/PortfolioWork';
import { WorkParameter } from '../../models/WorkParameter';
import './style.scss';

export interface WorkGroupProp {
  applications: WorkParameter[];
}

export const PortfolioWorkGroup: React.FC<WorkGroupProp> = ({ ...props }) => {
  return (
    <>
      <div className="application-card-container">
        {props.applications.map((e) => (
          <PortfolioWork
            applicationName={e.applicationName}
            applicationPictureUrl={e.applicationPictureUrl}
            applicationDescription={e.applicationDescription}
            applicationOptions={e.applicationOptions}
          />
        ))}
      </div>
    </>
  );
};
