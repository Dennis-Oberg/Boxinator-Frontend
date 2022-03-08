import React from 'react';
import '../Style/styles.less'

export const BoxList = ({ boxes, error }) => {


    const renderColours = React.useCallback(() => {

        let doc = document.getElementsByClassName("tableRowWithColour");

        for (let i = 0; i < doc.length; i++) {
            const element = doc[i];
            element.style.backgroundColor = boxes[i].containerColour;

        }

    }, [boxes]);

    React.useEffect(() => {
        renderColours();
    }, [renderColours]);

    return (
        <div className="container">
            {boxes.length > 0 ?
                <table className="boxtable">
                    <thead className='tableheader'>
                        <tr>
                            <th>Reciever</th>
                            <th>Weight</th>
                            <th>Box Colour</th>
                            <th>Shipping Cost</th>
                        </tr>
                    </thead>
                    <tbody>

                        {boxes.map((item, index) => (
                            <tr key={index}>
                                <td>{item.country}</td>
                                <td>{item.weightInKiloGrams} Kilograms</td>
                                <td className='tableRowWithColour'></td>
                                <td>{item.shippingCost} SEK</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                : <div className='alertError'>
                    {error !== "" ? <span>{error}</span> :
                        <span>
                            No Boxes added!</span>}
                </div>
            }
        </div>
    )
}
