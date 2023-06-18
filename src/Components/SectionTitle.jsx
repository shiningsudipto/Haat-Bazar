const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="SectionHeading">{heading}</h2>
            <h3 className="sectionSubHeading">{subHeading}</h3>
        </div>
    )
}
export default SectionTitle;