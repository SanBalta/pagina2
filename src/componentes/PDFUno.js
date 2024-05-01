import {
    Document,
    Text,
    Page,
    StyleSheet
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page:{
        textAlign:"justify",
        padding:25,
        fontSize:14,
        lineHeight:1.5
    }
})

function PDFUno(){
    return(
    <Document>
        <Page style={styles.page}>
            <Text>Atención docente de grupo:</Text>
            <Text>Oficio No. 253/F88/2024</Text>
            <Text>{`\n`}</Text>
            <Text>
            Estimados Padres y Tutores,

            Espero que este mensaje les encuentre a ustedes y a sus seres queridos
            en buena salud y en buen ánimo. Con el fin de mantenerlos informados 
            sobre los acontecimientos importantes en nuestra escuela, me dirijo a 
            ustedes con esta carta. En primer lugar, quiero expresar mi sincero 
            agradecimiento por su continuo apoyo a nuestra comunidad escolar. Su 
            compromiso con la educación de sus hijos es fundamental para el éxito 
            de cada uno de nuestros estudiantes, y estamos verdaderamente agradecidos 
            por ello.

            Me complace informarles que el segundo trimestre del año académico está 
            llegando a su fin, y hemos presenciado un tremendo progreso y dedicación 
            por parte de nuestros estudiantes y personal docente. Sus esfuerzos en el 
            aula, así como en actividades extracurriculares, han contribuido significativamente 
            al ambiente de aprendizaje en nuestra escuela.

            Además, me gustaría recordarles sobre el próximo evento importante en nuestro 
            calendario escolar: la ceremonia de entrega de premios del segundo trimestre, 
            que se llevará a cabo el 26 de mayo del 2024 a las 8:00 am, en el auditorio de la escuela. Esta 
            ceremonia es una oportunidad para reconocer y celebrar los logros académicos, 
            artísticos y deportivos de nuestros estudiantes. Los animo a que asistan y se unan 
            a nosotros en esta ocasión especial.

            Por otro lado, quiero asegurarles que estamos comprometidos con la seguridad y 
            el bienestar de todos nuestros estudiantes. Continuaremos implementando protocolos 
            de salud y seguridad para prevenir la propagación de enfermedades y mantener un 
            entorno escolar seguro y saludable.

            Finalmente, si tienen alguna pregunta, inquietud o sugerencia, no duden en ponerse 
            en contacto con nosotros. Estamos aquí para apoyar a ustedes y a sus hijos en su 
            viaje educativo. Una vez más, les agradezco su colaboración y confianza en nuestra 
            escuela. Juntos, seguiremos trabajando para brindar la mejor educación posible a nuestros 
            estudiantes.
            
            </Text> 
            <Text>{`\n\n\n`}</Text>
            <Text>Firma del docente</Text>
            <Text>{`\n\n`}</Text>
            <Text>Armando Reyes Reyes</Text>
            <Text>__________________________</Text>
        </Page>
    </Document>
    )
}

export default PDFUno;