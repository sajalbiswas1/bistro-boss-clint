


const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md: w-3/12 m-auto text-center my-4">
            <p className="text-xs text-yellow-600 mb-3">---{heading}---</p>
            <h4 className="text-3xl border-y-4 py-3">{subHeading}</h4>
        </div>
    );
};
export default SectionTitle;