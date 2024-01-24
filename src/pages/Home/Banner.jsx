
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/mb8BcDh/pexels-pixabay-259962.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="mt-20">
                    <h1 className="mb-5 text-5xl font-bold">Buy, sell properties</h1>
                    <div className="m-10 w-screen max-w-screen-md">

                        <div className="flex flex-col">
                            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                                <form className="">
                                    <div className="relative mb-10 w-full flex  items-center justify-between rounded-md">
                                        <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8" className=""></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
                                        </svg>
                                        <input type="name" name="search" className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Search by name, type, manufacturer, etc" />
                                    </div>

                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                        <div className="flex flex-col">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Location</span>
                                                </label>
                                                <label className="input-group">
                                                    <input type="text" name="location" placeholder="Enter an address,city" className="input input-bordered w-full mt-2 block  rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" required />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Bedrooms</span>
                                                </label>
                                                <label className="input-group">
                                                    <select className="select w-full text-gray-400 max-w-xs select-bordered mt-2 block  rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200">
                                                        <option selected>Bedrooms</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Bathrooms</span>
                                                </label>
                                                <label className="input-group">
                                                    <select className="select w-full text-gray-400 max-w-xs select-bordered mt-2 block  rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200">
                                                        <option selected>Bathrooms</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </select>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Room Size</span>
                                                </label>
                                                <label className="input-group">
                                                    <select className="select w-full text-gray-400 max-w-xs select-bordered mt-2 block  rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200">
                                                        <option selected>Room Size</option>
                                                        <option>Small</option>
                                                        <option>Medium</option>
                                                        <option>Large</option>
                                                    </select>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Availability</span>
                                                </label>
                                                <label className="input-group">
                                                    <input type="text" name="availability" placeholder="Availability" className="input input-bordered w-full mt-2 block  rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" required />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Prize Range</span>
                                                </label>
                                                <label className="input-group">
                                                    <input type="range" min={0} max="100" value="40" className="range range-xs w-full mt-2 block  rounded-md border border-gray-100 bg-gray-100  shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                                        <button className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">Reset</button>
                                        <button className="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;