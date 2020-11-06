import { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import Api from "Api";

const HomeContainer = (props) => {
    const {
        location: { pathname },
    } = props;
    const [result, handleResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isMoive, handleIsMovie] = useState(pathname.includes("/movie/"));
    const [id, handleId] = useState(null);

    useEffect(() => {
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

            let res = null;

            try {
                if (isMoive) {
                    const val = await Api.MovieApi.movieDetail(id);
                    res = val.data;
                } else {
                    const val = await Api.TVApi.tvDetail(id);
                    res = val.data;
                }
            } catch {
                setError("Cant find anything!");
            } finally {
                setLoading(false);
                handleResult(res);
            }
        };

        getDetail();
    }, [loading]);

    return (
        <DetailPresenter
            result={result}
            error={error}
            loading={loading}
        ></DetailPresenter>
    );
};

export default HomeContainer;
