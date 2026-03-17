import React from 'react';
import HackerBtn from './HackerBtn';

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <HackerBtn
        label='Download Resume'
        href="/Murtaxa_Baig.pdf"
        download="Murtaxa_Baig.pdf"
      />
    </div>
  );
}

export default DownLoadResumeBtn;
