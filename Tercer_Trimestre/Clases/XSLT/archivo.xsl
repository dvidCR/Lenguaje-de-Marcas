<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:array="http://www.w3.org/2005/xpath-functions/array"
                xmlns:map="http://www.w3.org/2005/xpath-functions/map"
                xmlns:math="http://www.w3.org/2005/xpath-functions/math"
                exclude-result-prefixes="#all"
                expand-text="yes"
                version="3.0">

    <xsl:output method="html" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Concurso 2024</title>
            </head>
            <body>
                <table>
                    <td>Nombre: <xsl:apply-templates select="//Participante"/></td>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="Participante">
        <tr><xsl:value-of select="//Nombre"/></tr>
    </xsl:template>
</xsl:stylesheet>