import React from 'react';
import HackerBtn from './HackerBtn';

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <a href="/MurtaxaBaigResume.pdf" download>
        <HackerBtn label='Download Resume' />
      </a>
    </div>
  );
}

export default DownLoadResumeBtn;
