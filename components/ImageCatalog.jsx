import React from 'react'

const ImageCatalog = () => {
  return (
    <div className="bg-black text-white font-mono ">
      <div className="carousel w-[100vw] h-[100vh] overflow-hidden relative prev">
        <div className="list -z-10">
          <div className="item absolute inset-0">
            <img
              src="\marvimgs\carousel\dead.jpg"
              alt="deadpool"
              className="w-full h-full object-cover"
            />
            <div className="content absolute top-[20%] w-[1140px] max-w-[80%] left-[50%] translate-x-[-50%] pr-[30%] box-border text-white ">
              <div className="author font-bold tracking-wider ">Marvel</div>
              <div className="title">DeadPool</div>
              <div className="brief">Badass</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quae dolorem odit possimus veniam, voluptates delectus explicabo
                quos
              </div>
              <div className="buttons">
                <button className="explo">Explore</button>
                <button className="buy">Shop</button>
              </div>
            </div>
          </div>
          <div className="item absolute inset-0">
            <img
              src="\marvimgs\carousel\spider.jpg"
              alt="deadpool"
              className="w-full h-full object-cover"
            />
            <div className="content absolute top-[20%] w-[1140px] max-w-[80%] left-[50%] translate-x-[-50%] pr-[30%] box-border text-white ">
              <div className="author font-bold tracking-wider ">Marvel</div>
              <div className="title">Spider Man</div>
              <div className="brief">Boy</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quae dolorem odit possimus veniam, voluptates delectus explicabo
                quos
              </div>
              <div className="buttons">
                <button className="explo">Explore</button>
                <button className="buy">Shop</button>
              </div>
            </div>
          </div>
          <div className="item absolute inset-0">
            <img
              src="\marvimgs\carousel\groot.jpg"
              alt="deadpool"
              className="w-full h-full object-cover"
            />
            <div className="content absolute top-[20%] w-[1140px] max-w-[80%] left-[50%] translate-x-[-50%] pr-[30%] box-border text-white ">
              <div className="author font-bold tracking-wider ">Marvel</div>
              <div className="title">Groot</div>
              <div className="brief">I am Groot</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quae dolorem odit possimus veniam, voluptates delectus explicabo
                quos
              </div>
              <div className="buttons">
                <button className="explo">Explore</button>
                <button className="buy">Shop</button>
              </div>
            </div>
          </div>
          <div className="item absolute inset-0">
            <img
              src="\marvimgs\carousel\scarlet.jpg"
              alt="deadpool"
              className="w-full h-full object-cover"
            />
            <div className="content absolute top-[20%] w-[1140px] max-w-[80%] left-[50%] translate-x-[-50%] pr-[30%] box-border text-white ">
              <div className="author font-bold tracking-wider ">Marvel</div>
              <div className="title">Scarlet Witch</div>
              <div className="brief">Dark Holder</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quae dolorem odit possimus veniam, voluptates delectus explicabo
                quos
              </div>
              <div className="buttons">
                <button className="explo">Explore</button>
                <button className="buy">Shop</button>
              </div>
            </div>
          </div>
          <div className="item absolute inset-0">
            <img
              src="\marvimgs\carousel\rocket.jpg"
              alt="deadpool"
              className="w-full h-full object-cover"
            />
            <div className="content absolute top-[20%] w-[1140px] max-w-[80%] left-[50%] translate-x-[-50%] pr-[30%] box-border text-white ">
              <div className="author font-bold tracking-wider ">Marvel</div>
              <div className="title">Rocket</div>
              <div className="brief">Racoon</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quae dolorem odit possimus veniam, voluptates delectus explicabo
                quos
              </div>
              <div className="buttons">
                <button className="explo">Explore</button>
                <button className="buy">Shop</button>
              </div>
            </div>
          </div>
        </div>
        <div className="thumbs">
          <div className="item">
            <img src="\marvimgs\carousel\spider.jpg" alt="dead" />
            <div className="content">
              <div className="title">Web</div>
              <div className="desc">My Description</div>
            </div>
          </div>
          <div className="item">
            <img src="\marvimgs\carousel\groot.jpg" alt="dead" />
            <div className="content">
              <div className="title">Tree</div>
              <div className="desc">My Description</div>
            </div>
          </div>
          <div className="item">
            <img src="\marvimgs\carousel\scarlet.jpg" alt="dead" />
            <div className="content">
              <div className="title">Witch</div>
              <div className="desc">My Description</div>
            </div>
          </div>
          <div className="item">
            <img src="\marvimgs\carousel\rocket.jpg" alt="dead" />
            <div className="content">
              <div className="title">Joked</div>
              <div className="desc">My Description</div>
            </div>
          </div>
          <div className="item">
            <img src="\marvimgs\carousel\dead.jpg" alt="dead" />
            <div className="content">
              <div className="title">DeadBoy</div>
              <div className="desc">My Description</div>
            </div>
          </div>
        </div>
        <div className="arrows">
          <button className="prev"> &lt; </button>
          <button className="next"> &gt; </button>
        </div>
        <div className="time"></div>
      </div>
    </div>
  );
}

export default ImageCatalog