import { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import Api from "Api";

const DetailContainer = (props) => {
    const {
        location: { pathname },
    } = props;
    const [result, handleResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isMoive, handleIsMovie] = useState(pathname.includes("/movie/")); // 영화인지 path를 통해서 판단.
    const [id, handleId] = useState(null);

    const getDetail = async () => {
        const {
            match: {
                params: { id },
            },
            history: { push },
        } = props;

        if (isNaN(parseInt(id))) {
            return push("/");
        } else {
            handleId(parseInt(id));
        }

        try {
            if (isMoive) {
                const val = await Api.MovieApi.movieDetail(id);
                handleResult(val.data);
            } else {
                const val = await Api.TVApi.tvDetail(id);
                handleResult(val.data);
            }
        } catch {
            setError("Cant find anything!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getDetail();
    }, []);

    return (
        <DetailPresenter
            result={result}
            error={error}
            loading={loading}
        ></DetailPresenter>
    );
};

export default DetailContainer;
