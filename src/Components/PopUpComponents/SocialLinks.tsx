import React from 'react'

export default function SocialLinks() {
  return (
     <div className='flex gap-5 justify-center w-full h-full mt-20'>
                    <a href="https://www.instagram.com/gurnoorsinghofficial?stkn=MWJtOHZyMGRyb3JwdA==">
                      <img
                        src="/instagram.png"
                        className="w-[50px] h-[50px] cursor-pointer rounded-sm transform hover:scale-90 duration-300"
                        alt="Instagram"
                      />
                    </a>

                    <a href="https://www.youtube.com/@yourchannel">
                      <img
                        src="/youtube.png"
                        className="w-[50px] h-[50px] cursor-pointer transform hover:scale-90 duration-300"
                        alt="Youtube"
                      />
                    </a>

                    <a href="https://www.linkedin.com/in/gurnoorsinghh/">
                      <img
                        src="/linkedin.png"
                        className="w-[50px] h-[50px] cursor-pointer transform hover:scale-90 duration-300"
                        alt="LinkedIn"
                      />
                    </a>

                    <a href="https://x.com/yourusername">
                      <img
                        src="/twitter.png"
                        className="w-[50px] h-[50px] bg-white rounded-md cursor-pointer transform hover:scale-90 duration-300"
                        alt="X"
                      />
                    </a>
              </div>
  )
}
