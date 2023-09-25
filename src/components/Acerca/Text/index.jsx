import "./Text.css"

const Text = () => {
  return (
    <div>
      <div className="">
        <h3 className="custom__text">
        Every day millions of Ukrainians fight for their lives because of Russian invasion
        </h3>
        <p className="custom__text__opacity">
        Volunteers, individuals and organizations combine their efforts to provide support, give shelter to refugees and raise funds for those in need.
      </p>
      </div>
      <div className="mt__8">
        <h3 className="custom__text">
        Uniting the global tech community to support Ukraine
      </h3>
      <p className="custom__text__opacity">
        Google Developer Groups in Ukraine came together to organize DevFest for Ukraine — a global online tech conference to share a passion for technology with international community and raise funds for Ukraine.
      </p>
      </div>
    </div>
  )
}

export default Text
