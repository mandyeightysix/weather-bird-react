import React from "react";

export default function Search() {
    return (
        <div className="Search"> 
                <div className="row opacity-50">
                <div className="col-3">
                    <input
                    className="btn btn-outline-danger mb-3"
                    type="submit"
                    value="Vancouver"
                    id="vancouver"
                    />
                </div>
                <div className="col-3">
                    <input
                    className="btn btn-outline-danger mb-3"
                    type="submit"
                    value="Saskatoon"
                    id="saskatoon"
                    />
                </div>
                <div className="col-3">
                    <input
                    className="btn btn-outline-danger mb-3"
                    type="submit"
                    value="Montreal"
                    id="montreal"
                    />
            </div>
                <div className="col-3">
                    <input
                    className="btn btn-outline-danger mb-3"
                    type="submit"
                    value="Halifax"
                    id="halifax"
                    />
            </div>
            </div>
                <form id="search-form" className="mb-3">
                    <div className="row">
                    <div className="col-8">
                    <input
                    type="search"
                    placeholder="Type in location..."
                    className="form-control"
                    id="city-input"
                    autocomplete="off"
                    />
                    </div>
                <div className="col-2">
                    <div className="opacity-50">
                    <input className="btn btn-outline-danger" type="submit" />
                </div>
                </div>
                <div className="col-2">
                    <div className="opacity-50">
                    <button id="geo-location" className="btn btn-outline-danger">
                    <i className="fa-solid fa-location-arrow"></i>
                    </button>
                    </div>
                </div>
                </div>
                </form>
                </div>
    );
}