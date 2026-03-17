"use client"
import { useState, useEffect } from 'react';
import { Button, buttonVariants } from './ui/button';
import { Download } from 'lucide-react';

type HackerBtnProps = {
  label: string;
  href?: string;
  download?: boolean | string;
};

const HackerBtn = ({ label, href, download }: HackerBtnProps) => {
  const [displayText, setDisplayText] = useState(label);
  const charset = "abcdefghijklmnopqrstuvwxyz";

  const randomChars = (length: number) => {
    return Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)]
    ).join("");
  };

  const scramble = async (input: string) => {
    let prefix = "";
    for (let index = 0; index < input.length; index++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      prefix += input.charAt(index);
      setDisplayText(prefix + randomChars(input.length - prefix.length));
    }
  };

  const startScrambling = () => {
    scramble(label);
    setTimeout(() => console.log("Submitted"), label.length * 50);
  };

  useEffect(() => {
    setDisplayText(label);
  }, [label]);

  const content = (
    <>
      <Download className="mx-1" />
      {displayText}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={buttonVariants({ size: 'lg', className: 'text-base px-5 py-6' })}
        onMouseEnter={startScrambling}
      >
        {content}
      </a>
    );
  }

  return (
    <Button
      size={'lg'}
      className='text-base px-5 py-6'
      onMouseEnter={startScrambling}
    >
      {content}
    </Button>
  );
};

export default HackerBtn;
