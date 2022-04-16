import Header from "../Header"
import { FeedbackProvider } from "../../context/useFeedbackContext"
import FeedbackForm from "../FeedbackForm"
import FeedbackStats from "../FeedbackStats"
import FeedbackList from "../FeedbackList"
// import AboutIconLink from "./AboutIconLink"

function Home() {
  return (
    <>
    <Header/>
    <FeedbackProvider>
            <div className="flex flex-col justify-center items-center w-full">
                <FeedbackForm/>
                <FeedbackStats />
                <FeedbackList />
                {/* <AboutIconLink/> */}
            </div>
    </FeedbackProvider>
    </>
  )
}

export default Home