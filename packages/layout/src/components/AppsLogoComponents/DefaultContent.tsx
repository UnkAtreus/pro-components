import React from 'react';
import { defaultRenderLogo } from './index';
import type { AppsLogoComponentsAppList, AppsLogoComponentsAppItem } from './types';

export const DefaultContent: React.FC<{
  appList?: AppsLogoComponentsAppList;
  itemClick?: (item: AppsLogoComponentsAppItem) => void;
  baseClassName: string;
  hashId?: string;
}> = (props) => {
  const { appList, baseClassName, hashId, itemClick } = props;
  return (
    <div className={`${baseClassName}-content ${hashId}`}>
      <ul className={`${baseClassName}-content-list ${hashId}`}>
        {appList?.map((app, index) => {
          if (app?.children?.length) {
            return (
              <div className={`${baseClassName}-content-list-item-group ${hashId}`}>
                <div className={`${baseClassName}-content-list-item-group-title ${hashId}`}>
                  {app.title}
                </div>
                <DefaultContent
                  hashId={hashId}
                  itemClick={itemClick}
                  appList={app?.children}
                  baseClassName={baseClassName}
                />
              </div>
            );
          }
          return (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={`${baseClassName}-content-list-item ${hashId}`}
            >
              <a
                href={itemClick ? 'javascript:;' : app.url}
                onClick={() => itemClick?.(app)}
                target={app.target}
                rel="noreferrer"
              >
                {defaultRenderLogo(app.icon)}
                <div>
                  <div>{app.title}</div>
                  {app.desc ? <span>{app.desc}</span> : null}
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};