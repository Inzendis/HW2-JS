<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/textbooks">
        <html>
            <head>
              <meta charset="UTF-8" />
               <meta name="viewport" content="width=device-width, initial-scale=1.0" />
               <title>Christian Santiago - Personal Web Page</title>
               <link rel="stylesheet" href="/css/xml.css"/>
            </head>
            <body>
               <nav>
                    <ul class="menu">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="mainpage_v2.html">Main Page V2</a></li>
                        <li><a href="resume.html">Resume</a></li>
                        <li><a href="page3.html">Next JS 13</a></li>
                        <li><a href="computerStore.html">Custom System Store</a></li>
                        <li><a href="adobeAnimate.html">Adobe Animation</a></li>
                        <li><a href="textbook.xml">XML</a></li>
                    </ul>
                </nav>
               
                <div class="container"> 
                <h1>Current Books Using This Trimester and Previous Trimester</h1>
                <div class="textBookContainer">
                    <h2>Industrial Psychology</h2>
                    <table>
                       <tr>
                            <td style="font-weight: bold">Title: </td>
                            <td><xsl:value-of select="//book1/title"/></td> 
                        </tr>
                           <tr>
                            <td style="font-weight: bold">Authors: </td>
                              <td>
                              <span class="authorsName"><xsl:value-of class="authorsName" select="//book1/author/first_name"/></span>
                               <span class="authorsName"><xsl:value-of select="//book1/author/last_name"/></span></td>
                            
                         </tr>
                         <tr>
                            <td style="font-weight: bold">Publisher: </td>
                            <td><xsl:value-of select="//book1/publisher/name"/></td> 
                         </tr>
                         <tr>
                            <td style="font-weight: bold">Publisher Web-Page: </td>
                            <td><xsl:value-of select="//book1/publisher/website"/></td> 
                         </tr>
                         <tr>
                            <td style="font-weight: bold">Year Publication: </td>
                            <td><xsl:value-of select="//book1/year_of_publication"/></td> 
                         </tr>
                         <tr>
                            <td style="font-weight: bold">ISBN: </td>
                            <td><xsl:value-of select="//book1/ISBN"/></td> 
                         </tr>
                         <tr>
                            <td style="font-weight: bold">Book Web-Page: </td>
                            <td><xsl:value-of select="//book1/book_website"/></td> 
                         </tr>
                         <tr>
                            <td style="font-weight: bold">Edition: </td>
                            <td><xsl:value-of select="//book1/edition"/></td> 
                         </tr>
                         <tr>
                            <td style="font-weight: bold">Cover Type: </td>
                            <td><xsl:value-of select="//book1/cover_type"/></td> 
                         </tr>
                    </table>
                </div>
                
                <div class="textBookContainer">
                    <h2>Capstone 1</h2>
                    <table>
                        <tr>
                             <td style="font-weight: bold">Title: </td>
                             <td><xsl:value-of select="//book2/title"/></td> 
                         </tr>
                         <tr>
                             <td style="font-weight: bold">Authors:</td>
                           <td> <span class="authorsName"><xsl:value-of class="authorsName" select="//book2/author/first_name"/></span>
                               <span class="authorsName"><xsl:value-of select="//book2/author/last_name"/></span></td>
                         
                            
                          </tr>
                          <tr>
                             <td style="font-weight: bold">Publisher: </td>
                             <td><xsl:value-of select="//book2/publisher/name"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold">Publisher Web-Page: </td>
                             <td><xsl:value-of select="//book2/publisher/website"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold">Year Publication: </td>
                             <td><xsl:value-of select="//book2/year_of_publication"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold">ISBN: </td>
                             <td><xsl:value-of select="//book2/ISBN"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold">Book Web-Page: </td>
                             <td><xsl:value-of select="//book2/book_website"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold">Edition: </td>
                             <td><xsl:value-of select="//book2/edition"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold">Cover Type: </td>
                             <td><xsl:value-of select="//book2/cover_type"/></td> 
                          </tr>
                     </table>
                </div>

                <div class="textBookContainer">
                    <h2>Digital Signal Processing</h2>
                    <table>
                        <tr>
                             <td style="font-weight: bold">Title: </td>
                             <td><xsl:value-of select="//book3/title"/></td> 
                         </tr>
                         <tr>
                             <td style="font-weight: bold">Authors: </td>
                          
                                <td> <span class="authorsName"><xsl:value-of class="authorsName" select="//book3/author/first_name"/></span>
                               <span class="authorsName"><xsl:value-of select="//book3/author/last_name"/></span></td>
                             
                          </tr>
                          <tr>
                             <td style="font-weight: bold">Publisher: </td>
                             <td><xsl:value-of select="//book3/publisher/name"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold">Publisher Web-Page: </td>
                             <td><xsl:value-of select="//book3/publisher/website"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold">Year Publication: </td>
                             <td><xsl:value-of select="//book3/year_of_publication"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold">ISBN: </td>
                             <td><xsl:value-of select="//book3/ISBN"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold">Book Web-Page: </td>
                             <td><xsl:value-of select="//book3/book_website"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold">Edition: </td>
                             <td><xsl:value-of select="//book3/edition"/></td> 
                          </tr>
                          <tr>
                             <td style="font-weight: bold">Cover Type: </td>
                             <td><xsl:value-of select="//book3/cover_type"/></td> 
                          </tr>
                     </table>
                </div></div>

            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>