import { useState, useContext, useEffect } from 'react';
import { Card, Popconfirm, message } from 'antd';
import { FaRegCopy } from "react-icons/fa";
import { FcDeleteDatabase } from "react-icons/fc";
import { UserContext } from '../../Context/Context';
import { Delete_post } from '../Footer/helpers';
import Nodata from './Nodata';
const App = ({ loader }) => {
    const { user, Results, SetResults, SelectedIndex, SetSelectedIndex,filteredResults, favourite, setfavorite, setShowModal } = useContext(UserContext);
    const [isLoading, SetisLoading] = useState(false);
    const handleDelete = (id) => {
        SetResults((prev) => prev.filter((item) => item._id !== id));
        Delete_post(SetisLoading, id, SelectedIndex,SetResults, Results);
    };

    function setShow(index) {
        SetSelectedIndex(index);
        setShowModal(true);
    }

    if (loader) {
        return <Loader />;
    }

    const isLessThanOneDay = (inputDate) => {
        const currentDate = new Date();
        const providedDate = new Date(inputDate);
        return (currentDate - providedDate) / (1000 * 60 * 60) < 24;
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => message.success("Copied to clipboard!"))
            .catch(() => message.error("Failed to copy!"));
    };
    const filteredresults = favourite ? filteredResults.filter((val) => val.important==true) : Results;
    if(filteredresults.length==0 || filteredResults.length==0)
    {
        return <Nodata />
    }
    return (
        <div className="row">
            {favourite && <h6 className="text-center mt-4">Favourite Notes</h6>}
            {filteredresults.map((val, index) => {
                const flag = isLessThanOneDay(val.createdAt);
                return (
                    <div className="col-md-4 mt-3" data-aos="fade-up" data-aos-duration='1200' key={index}>
                        <div className="card" style={{ width: "100%", height: '300px' }}>
                            <div className="card-body" onClick={() => setShow(index)}>
                                <p className="card-subtitle mb-2 text-muted">
                                    {flag && <button className="btn rounded-5" style={{ background: '#0000ff', color: 'white' }}>New</button>} &ensp;
                                    <b>{val.createdAt.slice(0, 10)}</b>
                                </p>
                                <h5 className="card-title p-1 text">{val.caption}</h5>
                                <p className="card-text">{val.description}</p>
                                {val.Img!=null  ? (
                                    <div className="row">
                                        {val.Img.slice(0,1).map((item, inner) => (
                                            <div className="col-md-3" key={inner + val._id}>
                                                <img src={item} alt="Card cap" height={100} width={100} style={{ objectFit: 'cover' }} />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="mt-4 text-center ">No Images Found</p>
                                )}
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-end">
                                    <FaRegCopy size={26} className="m-1" onClick={() => handleCopy(val.caption + ' ' + val.description)} style={{ cursor: "pointer" }} />
                                    <Popconfirm title="Are you sure you want to delete this record?"
                                        onConfirm={() => handleDelete(val._id)}
                                        okText="Yes" cancelText="No">
                                        <FcDeleteDatabase size={26} className="m-1" style={{ cursor: "pointer" }} />
                                    </Popconfirm>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default App;

export const Loader = () => {
    return (
        <div className="row">
            {[...Array(6)].map((_, index) => (
                <div className="col-md-4 mt-3" key={index}>
                    <Card loading={true} style={{ minWidth: 300, minHeight: 250 }} />
                </div>
            ))}
        </div>
    );
};
