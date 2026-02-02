import News from "../components/news";
import Vulnerabilities from "../components/vulnerabilities";
import Welcome from "../components/welcome";

function Home() {
    return <>
        <div className="flex flex-col gap-5">
            <Welcome />
        </div>
        <div className="flex flex-wrap gap-10 p-10">
            <News />
            <Vulnerabilities />
        </div>
    </>
}

export default Home;