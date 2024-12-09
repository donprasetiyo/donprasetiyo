import ReadMoreButton from "../read-more";

const List = ({ items }: { items: string[] }) => {
    return (
        <ReadMoreButton maxHeight={90}>
            <ul className="list-disc pl-6">
                {
                    items.map((item) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
        </ReadMoreButton>
    );
}

export default List;