import React from 'react'

function WhatIsUMLSlide() {
  return (
    <section>
        <h6>Czym jest UML?</h6>
        <table style={{
            fontSize:"18px"
        }}>
            <thead>
                <tr>
                    <th>Czym jest</th>
                    <th>Czym nie jest</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Językiem modelowania</td><td>Językiem programowania</td></tr>
                <tr><td></td><td>Metodyką</td></tr>
                <tr><td></td><td>Procesem tworzenia oprogramowania</td></tr>
            </tbody>
        </table>
    </section>
  )
}

export default WhatIsUMLSlide