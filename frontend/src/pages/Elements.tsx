import React from 'react'

function Elements() {
    return (
        <div>
                <div className="container">
                    <div className="row vertical-gap">
                        <div className="col-lg-4">
                            {/* START: Headings */}
                            <h3 className="text-main-1">Headings</h3>
                            <div className="nk-gap" />
                            <h1>h1 Heading</h1>
                            <h2>h2 Heading</h2>
                            <h3>h3 Heading</h3>
                            <h4>h4 Heading</h4>
                            <h5>h5 Heading</h5>
                            <h6>h6 Heading</h6>
                            {/* END: Headings */}
                        </div>
                        <div className="col-lg-8">
                            {/* START: Paragraphs */}
                            <h3 className="text-main-1">Paragraphs</h3>
                            <div className="nk-gap" />
                            <p><strong>Paragraph</strong> - which was concealed with great care and some a pewter platter of unusual dimensions. This mighty dish he placed before his guest, who, using his poniard to cut it ope, lost no time in making himself acquainted with its contents hich was concealed with great care and some a pewter platter of unusual.</p>
                            <p className="lead"><strong>Lead Paragraph</strong> - it was some time before he obtained any answer, and the reply, when made, was unpropitious hich was concealed with great care and some a pewter platter of unusual.</p>
                            <p className="text-white"><strong>White Paragraph</strong> - who at last turned sulky, and would only say, `I am older than you, and must know better'; and this Alice would not allow without knowing how old it was, and, as the Lory positively refused to tell its age.</p>
                            {/* END: Paragraphs */}
                        </div>
                    </div>
                    {/* START: Decorated Headings */}
                    <div className="nk-gap-2" />
                    <h3><span className="text-main-1">Decorated</span> Headings</h3>
                    <div className="nk-gap" />
                    <h3 className="nk-decorated-h"><span><span className="text-main-1">Heading</span> #1</span></h3>
                    <h3 className="nk-decorated-h-2"><span>Heading #2</span></h3>
                    <h3 className="nk-decorated-h-3"><span>Heading #3</span></h3>
                    {/* END: Decorated Headings */}
                    <div className="nk-gap-2" />
                    <div className="row vertical-gap">
                        <div className="col-lg-7">
                            <h3 className="text-main-1">Tabs</h3>
                            <div className="nk-gap" />
                            {/* START: Tabs  */}
                            <div className="nk-tabs">
                                {/*
                        Additional Classes:
                            .nav-tabs-fill
                    */}
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#tabs-1-1" role="tab" data-toggle="tab">Tab 1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#tabs-1-2" role="tab" data-toggle="tab">Tab 2</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#tabs-1-3" role="tab" data-toggle="tab">Tab 3</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane fade show active" id="tabs-1-1">
                                        <div className="nk-gap" />
                                        <p>I have related the substance of several conversations I had with my master during the greatest part of the time I had the, for brevity sake, omitted much moredown.</p>
                                        <p>And she went on planning to herself how she would manage it. 'They must go by the carrier' she thought; and how funny it'll seem And she went on planning to herself how</p>
                                        <div className="nk-gap" />
                                    </div>
                                    <div role="tabpanel" className="tab-pane fade" id="tabs-1-2">
                                        <div className="nk-gap" />
                                        <p>And she went on planning to herself how she would manage it. 'They must go by the carrier' she thought; and how funny it'll seem And she went on planning to herself how</p>
                                        <div className="nk-gap" />
                                    </div>
                                    <div role="tabpanel" className="tab-pane fade" id="tabs-1-3">
                                        <div className="nk-gap" />
                                        <p>I have related the substance of several conversations I had with my master during the greatest part of the time I had the, for brevity sake, omitted much moredown.</p>
                                        <div className="nk-gap" />
                                    </div>
                                </div>
                            </div>
                            {/* END: Tabs */}
                        </div>
                        <div className="col-lg-5">
                            {/* START: Text-Level Semantics */}
                            <h3><span className="text-main-1">Text-Level</span> Semantics</h3>
                            <div className="nk-gap" />
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4>&lt;UL&gt; Elements</h4>
                                    <div className="nk-gap" />
                                    <ul className="text-main-1 pl-20">
                                        <li><strong className="text-white">Item 1</strong></li>
                                        <li><strong className="text-white">Item 2</strong>
                                            <ul>
                                                <li><span className="text-white">Item 1</span></li>
                                                <li><span className="text-white">Item 2</span>
                                                    <ul>
                                                        <li><span className="text-white">Item 1</span></li>
                                                        <li><span className="text-white">Item 2</span></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <h4>&lt;OL&gt; Elements</h4>
                                    <div className="nk-gap" />
                                    <ol className="text-main-1 pl-20">
                                        <li><strong className="text-white">Item 1</strong></li>
                                        <li><strong className="text-white">Item 2</strong>
                                            <ol>
                                                <li><span className="text-white">Item 1</span></li>
                                                <li><span className="text-white">Item 2</span>
                                                    <ol>
                                                        <li><span className="text-white">Item 1</span></li>
                                                        <li><span className="text-white">Item 2</span></li>
                                                    </ol>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            {/* END: Text-Level Semantics */}
                        </div>
                    </div>
                    <div className="nk-gap-2" />
                    <div className="row vertical-gap">
                        <div className="col-lg-7">
                            {/* START: Accordion 1 */}
                            <h3 className="text-main-1">Accordion</h3>
                            <div className="nk-gap" />
                            <div className="nk-accordion" id="accordion-1" role="tablist" aria-multiselectable="true">
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="accordion-1-1-heading">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion-1" href="#accordion-1-1" aria-expanded="true" aria-controls="accordion-1-1">
                                            Collapsible 1 <span className="panel-heading-arrow fa fa-angle-down" />
                                        </a>
                                    </div>
                                    <div id="accordion-1-1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="accordion-1-1-heading">
                                        <p>I have related the substance of several conversations I had with my master during the greatest part of the time I had the, for brevity sake, omitted much moredown.</p>
                                        <p>And she went on planning to herself how she would manage it. 'They must go by the carrier' she thought; and how funny it'll seem And she went on planning to herself how</p>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="accordion-1-2-heading">
                                        <a data-toggle="collapse" data-parent="#accordion-1" href="#accordion-1-2" aria-expanded="false" aria-controls="accordion-1-2">
                                            Collapsible 2 <span className="panel-heading-arrow fa fa-angle-down" />
                                        </a>
                                    </div>
                                    <div id="accordion-1-2" className="panel-collapse collapse show" role="tabpanel" aria-labelledby="accordion-1-2-heading">
                                        <p>And she went on planning to herself how she would manage it. 'They must go by the carrier' she thought; and how funny it'll seem And she went on planning to herself how</p>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="accordion-1-3-heading">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion-1" href="#accordion-1-3" aria-expanded="false" aria-controls="accordion-1-3">
                                            Collapsible 3 <span className="panel-heading-arrow fa fa-angle-down" />
                                        </a>
                                    </div>
                                    <div id="accordion-1-3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="accordion-1-3-heading">
                                        <p>I have related the substance of several conversations I had with my master during the greatest part of the time I had the, for brevity sake, omitted much moredown.</p>
                                    </div>
                                </div>
                            </div>
                            {/* END: Accordion 1 */}
                            {/* START: Blockquote */}
                            <div className="nk-gap-2" />
                            <h3 className="text-main-1">Quote</h3>
                            <div className="nk-gap" />
                            <blockquote className="nk-blockquote">
                                <div className="nk-blockquote-icon"><span>"</span></div>
                                <div className="nk-blockquote-content">
                                    Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door. As if she had known them all her life. Indeed, she had quite a long argument with the Lory.
                                </div>
                                <div className="nk-blockquote-author"><span>Samuel Marlow</span></div>
                            </blockquote>
                            {/* END: Blockquote */}
                        </div>
                        <div className="col-lg-5">
                            {/* START: Table */}
                            <h3 className="text-main-1">Table</h3>
                            <div className="nk-gap" />
                            <table className="nk-table">
                                <thead>
                                    <tr>
                                        <th colSpan={3}>Skills Table</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <th>Game Line</th>
                                        <th className="text-center">Percent</th>
                                    </tr>
                                    <tr>
                                        <td>Duke</td>
                                        <td>Top</td>
                                        <td className="text-center"><strong>85</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Bandi</td>
                                        <td>Jungle</td>
                                        <td className="text-center"><strong>75</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Faker</td>
                                        <td>Mid</td>
                                        <td className="text-center"><strong>80</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Bang</td>
                                        <td>ADC</td>
                                        <td className="text-center"><strong>99</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Wolf</td>
                                        <td>Support</td>
                                        <td className="text-center"><strong>80</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* END: Table */}
                        </div>
                    </div>
                    {/* START: Buttons */}
                    <div className="nk-gap-2" />
                    <h3 className="text-main-1">Buttons</h3>
                    <div className="nk-gap" />
                    <a href="#" className="nk-btn nk-btn-rounded nk-btn-color-main-1">Button</a>
                    &nbsp;&nbsp;
                    <a href="#" className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-info">
                        <span className="icon ion-paper-airplane" />
                        Button
                    </a>
                    &nbsp;&nbsp;
                    <a href="#" className="nk-btn nk-btn-color-primary">
                        <span className="nk-btn-effect-bg" />
                        Button
                    </a>
                    &nbsp;&nbsp;
                    <a href="#" className="nk-btn nk-btn-outline nk-btn-color-success">
                        Button
                    </a>
                    &nbsp;&nbsp;
                    <a href="#" className="nk-btn nk-btn-rounded nk-btn-outline nk-btn-color-warning">
                        <span>Button</span>
                        <span className="icon"><i className="fab fa-css3" /></span>
                    </a>
                    <div className="nk-gap-1" />
                    <a href="#" className="nk-btn nk-btn-xs nk-btn-rounded nk-btn-color-white">Button</a>
                    &nbsp;&nbsp;
                    <a href="#" className="nk-btn nk-btn-sm nk-btn-rounded nk-btn-color-white">Button</a>
                    &nbsp;&nbsp;
                    <a href="#" className="nk-btn nk-btn-rounded nk-btn-color-white">Button</a>
                    &nbsp;&nbsp;
                    <a href="#" className="nk-btn nk-btn-lg nk-btn-rounded nk-btn-color-white">Button</a>
                    &nbsp;&nbsp;
                    <a href="#" className="nk-btn nk-btn-x2 nk-btn-rounded nk-btn-color-white">Button</a>
                    &nbsp;&nbsp;
                    <a href="#" className="nk-btn nk-btn-x3 nk-btn-rounded nk-btn-color-white">Button</a>
                    &nbsp;&nbsp;
                    <a href="#" className="nk-btn nk-btn-x4 nk-btn-rounded nk-btn-color-white">Button</a>
                    {/* END: Buttons */}
                    {/*
            START: Pagination

            Additional Classes:
                .nk-pagination-center
                .nk-pagination-right
        */}
                    <div className="nk-gap-2" />
                    <h3 className="text-main-1">Pagination</h3>
                    <div className="nk-gap" />
                    <div className="nk-pagination nk-pagination-center">
                        <a href="#" className="nk-pagination-prev">
                            <span className="ion-ios-arrow-back" />
                        </a>
                        <nav>
                            <a className="nk-pagination-current" href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <span>...</span>
                            <a href="#">14</a>
                        </nav>
                        <a href="#" className="nk-pagination-next">
                            <span className="ion-ios-arrow-forward" />
                        </a>
                    </div>
                    {/* END: Pagination */}
                    {/* START: Features */}
                    <div className="nk-gap-2" />
                    <h3 className="text-main-1">Features</h3>
                    <div className="nk-gap" />
                    <div className="row vertical-gap">
                        <div className="col-lg-4">
                            <div className="nk-feature-1">
                                <div className="nk-feature-icon">
                                    <img src="assets/images/icon-mouse.svg" alt="" />
                                </div>
                                <div className="nk-feature-cont">
                                    <h3 className="nk-feature-title"><a href="#">PC</a></h3>
                                    <h3 className="nk-feature-title text-main-1"><a href="#">View Games</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="nk-feature-1">
                                <div className="nk-feature-icon">
                                    <img src="assets/images/icon-gamepad.svg" alt="" />
                                </div>
                                <div className="nk-feature-cont">
                                    <h3 className="nk-feature-title"><a href="#">PS4</a></h3>
                                    <h3 className="nk-feature-title text-main-1"><a href="#">View Games</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="nk-feature-1">
                                <div className="nk-feature-icon">
                                    <img src="assets/images/icon-gamepad-2.svg" alt="" />
                                </div>
                                <div className="nk-feature-cont">
                                    <h3 className="nk-feature-title"><a href="#">Xbox</a></h3>
                                    <h3 className="nk-feature-title text-main-1"><a href="#">View Games</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="nk-feature-1">
                                <div className="nk-feature-icon">
                                    <span className="ion-help-buoy" />
                                </div>
                                <div className="nk-feature-cont">
                                    <h3 className="nk-feature-title"><a href="#">Help</a></h3>
                                    <h3 className="nk-feature-title text-main-1"><a href="#">Get</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="nk-feature-1">
                                <div className="nk-feature-icon">
                                    <span className="ion-social-rss" />
                                </div>
                                <div className="nk-feature-cont">
                                    <h3 className="nk-feature-title"><a href="#">News</a></h3>
                                    <h3 className="nk-feature-title text-main-1"><a href="#">Read</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="nk-feature-1">
                                <div className="nk-feature-icon">
                                    <span className="ion-chatboxes" />
                                </div>
                                <div className="nk-feature-cont">
                                    <h3 className="nk-feature-title"><a href="#">Forum</a></h3>
                                    <h3 className="nk-feature-title text-main-1"><a href="#">Join</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="nk-feature-2">
                                <div className="nk-feature-icon">
                                    <span className="ion-leaf" />
                                </div>
                                <div className="nk-feature-cont text-center">
                                    <h3 className="nk-feature-title"><span className="text-main-1">Clean</span> and Slick</h3>
                                    <div className="nk-gap-1" />
                                    This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="nk-feature-2">
                                <div className="nk-feature-icon">
                                    <span className="ion-social-twitter" />
                                </div>
                                <div className="nk-feature-cont text-center">
                                    <h3 className="nk-feature-title"><span className="text-main-1">Social</span> Friendly</h3>
                                    <div className="nk-gap-1" />
                                    d this she looked down at her hands and was surprised to see that she had put on one of the Rabbit's little white.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="nk-feature-2">
                                <div className="nk-feature-icon">
                                    <span className="ion-information-circled" />
                                </div>
                                <div className="nk-feature-cont text-center">
                                    <h3 className="nk-feature-title"><span className="text-main-1">Well</span> Documented</h3>
                                    <div className="nk-gap-1" />
                                    I had with my master during the greatest part of the time I had the honour to be in his service.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="nk-feature-2">
                                <div className="nk-feature-icon">
                                    <div className="nk-count h2 mb-0">86</div>
                                </div>
                                <div className="nk-feature-cont text-center">
                                    <h3 className="nk-feature-title">Projects</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="nk-feature-2">
                                <div className="nk-feature-icon">
                                    <div className="nk-count h2 mb-0">640</div>
                                </div>
                                <div className="nk-feature-cont text-center">
                                    <h3 className="nk-feature-title">Happy Clients</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="nk-feature-2">
                                <div className="nk-feature-icon">
                                    <div className="nk-count h2 mb-0">47</div>
                                </div>
                                <div className="nk-feature-cont text-center">
                                    <h3 className="nk-feature-title">Awards Won</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END: Features */}
                    {/*
            START: Countdown

            Additional Classes:
                .nk-countdown-center
                .nk-countdown-right
        */}
                    <div className="nk-gap-2" />
                    <h3 className="text-main-1">Countdown</h3>
                    <div className="nk-gap" />
                    <div className="nk-countdown nk-countdown-center" data-end="2021-11-26 08:20" data-timezone="EST" />
                    {/* END: Countdown */}
                    {/* START: Info Boxes */}
                    <div className="nk-gap-2" />
                    <h3><span className="text-main-1">Info</span> Boxes</h3>
                    <div className="nk-gap" />
                    <div className="nk-info-box text-danger">
                        <div className="nk-info-box-icon">
                            <i className="ion-close-round" />
                        </div>
                        <h3>Error!</h3>
                        <em>Thing place. In lesser waters creepeth his place us give multiply fruitful under. Make. Also were, you're make make likeness.</em>
                    </div>
                    <div className="nk-gap" />
                    <div className="nk-info-box text-success">
                        <div className="nk-info-box-icon">
                            <i className="ion-checkmark-round" />
                        </div>
                        <h3>Success!</h3>
                        <em>Hath days lesser meat signs very. Fruit second can't moved seas meat two. Grass face isn't forth firmament dry. Don't.</em>
                    </div>
                    <div className="nk-gap" />
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="nk-info-box text-info">
                                <div className="nk-info-box-icon">
                                    <i className="ion-information" />
                                </div>
                                <div className="nk-info-box-close nk-info-box-close-btn">
                                    <i className="ion-close-round" />
                                </div>
                                <h3>Info!</h3>
                                <em>Hath days lesser meat signs very. Fruit second can't moved seas meat two. Grass face isn't forth firmament dry. Don't.</em>
                                <div className="nk-gap-1" />
                                <a href="#" className="nk-btn nk-btn-rounded nk-btn-color-info">
                                    <span>Help Me</span>
                                    <span className="icon"><i className="ion-help-circled" /></span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="nk-info-box text-warning">
                                <div className="nk-info-box-icon">
                                    <i className="ion-android-notifications-none" />
                                </div>
                                <div className="nk-info-box-close nk-info-box-close-btn">
                                    <i className="ion-close-round" />
                                </div>
                                <h3>Notification!</h3>
                                <em>Grass his itself. Subdue lesser have without female deep set tree together fourth under brought don't seasons seed saw third.</em>
                                <div className="nk-gap-1" />
                                <a href="#" className="nk-btn nk-btn-rounded nk-btn-outline nk-btn-color-warning">
                                    Got It
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="nk-info-box nk-info-box-noicon">
                        <div className="nk-info-box-close nk-info-box-close-btn">
                            <i className="ion-close-round" />
                        </div>
                        <em>No Icon :'(</em>
                    </div>
                    {/* END: Info Boxes */}
                    <div className="nk-gap-2" />
                    <h3><span className="text-main-1">Audio</span> Player</h3>
                    <div className="nk-gap" />
                    {/* START: Plain Audio */}
                    <div className="nk-audio-plain" data-src="assets/mp3/OctoSound-sport.mp3">
                        <div className="nk-audio-plain-title">
                            <strong>OctoSound</strong> - Sport
                            <div className="nk-audio-progress">
                                <div className="nk-audio-progress-current" />
                            </div>
                        </div>
                        <div className="nk-audio-plain-duration">
                            05:34
                        </div>
                    </div>
                    <div className="nk-gap-1" />
                    <div className="nk-audio-plain" data-src="assets/mp3/soundroll-total-overdrive.mp3">
                        <div className="nk-audio-plain-title">
                            <strong>soundroll</strong> - Total Overdrive
                            <div className="nk-audio-progress">
                                <div className="nk-audio-progress-current" />
                            </div>
                        </div>
                        <div className="nk-audio-plain-duration">
                            03:59
                        </div>
                    </div>
                    {/* END: Plain Audio  */}
                    {/* START: Forms */}
                    <div className="nk-gap-2" />
                    <div className="row vertical-gap">
                        <div className="col-lg-6">
                            <h3><span className="text-main-1">AJAX</span> Contact Form</h3>
                            <div className="nk-gap" />
                            <form action="php/ajax-contact-form.php" className="nk-form nk-form-ajax">
                                <div className="row vertical-gap sm-gap">
                                    <div className="col-md-6">
                                        <input type="email" className="form-control required" name="email" placeholder="Email *" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control required" name="name" placeholder="Name *" />
                                    </div>
                                </div>
                                <div className="nk-gap" />
                                <textarea className="form-control required" name="message" rows={5} placeholder="Message *" defaultValue={""} />
                                <div className="nk-gap-1" />
                                <button className="nk-btn nk-btn-rounded nk-btn-color-dark-3">
                                    <span>Send</span>
                                    <span className="icon"><i className="ion-paper-airplane" /></span>
                                </button>
                                <div className="nk-form-response-success" />
                                <div className="nk-form-response-error" />
                            </form>
                            <div className="nk-gap-2" />
                            <h3><span className="text-main-1">Other</span> Controls</h3>
                            <div className="nk-gap" />
                            <form action="#" className="nk-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <select name="select" className="form-control">
                                            <option disabled selected>Select a Country</option>
                                            <option value={1}>Russian Federation</option>
                                            <option value={2}>USA</option>
                                            <option value={3}>United Kingdom</option>
                                            <option value={4}>France</option>
                                            <option value={5}>Spain</option>
                                            <option value={6}>Germany</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mt-7" />
                                        <div className="nk-rating">
                                            <input type="radio" id="review-rate-5" name="review-rate" defaultValue={5} />
                                            <label htmlFor="review-rate-5">
                                                <span><i className="far fa-star" /></span>
                                                <span><i className="fa fa-star" /></span>
                                            </label>
                                            <input type="radio" id="review-rate-4" name="review-rate" defaultValue={4} />
                                            <label htmlFor="review-rate-4">
                                                <span><i className="far fa-star" /></span>
                                                <span><i className="fa fa-star" /></span>
                                            </label>
                                            <input type="radio" id="review-rate-3" name="review-rate" defaultValue={3} />
                                            <label htmlFor="review-rate-3">
                                                <span><i className="far fa-star" /></span>
                                                <span><i className="fa fa-star" /></span>
                                            </label>
                                            <input type="radio" id="review-rate-2" name="review-rate" defaultValue={2} />
                                            <label htmlFor="review-rate-2">
                                                <span><i className="far fa-star" /></span>
                                                <span><i className="fa fa-star" /></span>
                                            </label>
                                            <input type="radio" id="review-rate-1" name="review-rate" defaultValue={1} />
                                            <label htmlFor="review-rate-1">
                                                <span><i className="far fa-star" /></span>
                                                <span><i className="fa fa-star" /></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <h3><span className="text-main-1">MailChimp</span> Form 1</h3>
                            <div className="nk-gap" />
                            {/* START: MailChimp Signup Form */}
                            <form action="//nkdev.us11.list-manage.com/subscribe/post?u=d433160c0c43dcf8ecd52402f&id=68d0448ee3" method="post" className="nk-mchimp validate" target="_blank">
                                <div className="input-group">
                                    <input type="email" name="EMAIL" className="required email form-control" placeholder="Email *" />
                                    <button className="nk-btn nk-btn-color-dark-3">Subscribe</button>
                                </div>
                                <div className="nk-form-response-success" />
                                <div className="nk-form-response-error" />
                                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_d433160c0c43dcf8ecd52402f_68d0448ee3" tabIndex={-1} /></div>
                            </form>
                            {/* END: MailChimp Signup Form */}
                            <div className="nk-gap-2" />
                            <h3><span className="text-main-1">MailChimp</span> Form 2</h3>
                            <div className="nk-gap" />
                            {/* START: MailChimp Signup Form */}
                            <form action="//nkdev.us11.list-manage.com/subscribe/post?u=d433160c0c43dcf8ecd52402f&id=68d0448ee3" method="post" className="nk-mchimp nk-form nk-form-style-1 validate" target="_blank">
                                <div className="input-group">
                                    <input type="email" name="EMAIL" className="required email form-control" placeholder="Email *" />
                                    <button className="nk-btn nk-btn-color-white">Subscribe</button>
                                </div>
                                <small>We'll never share your email with anyone else.</small>
                                <div className="nk-form-response-success" />
                                <div className="nk-form-response-error" />
                                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_d433160c0c43dcf8ecd52402f_68d0448ee3" tabIndex={-1} /></div>
                            </form>
                            {/* END: MailChimp Signup Form */}
                            <div className="nk-gap-2" />
                            <h3><span className="text-main-1">Search</span> Form</h3>
                            <div className="nk-gap" />
                            {/* START: Search Form */}
                            <form action="#" method="post" className="nk-form nk-form-style-1">
                                <div className="input-group">
                                    <input type="text" name="s" className="form-control" placeholder="Type something" />
                                    <button className="nk-btn nk-btn-color-main-1">
                                        <span className="fa fa-search" />
                                    </button>
                                </div>
                            </form>
                            {/* END: Search Form */}
                        </div>
                    </div>
                    {/* END: Forms */}
                    {/* START: Content Grid */}
                    <div className="nk-gap-2" />
                    <h3><span className="text-main-1">Content</span> Grid</h3>
                    <div className="nk-gap" />
                    <div className="row vertical-gap text-white">
                        <div className="col-lg-6">
                            <div className="nk-box-2 bg-dark-2">
                                <h4>Thus Much</h4>
                                Thus much I thought proper to tell you in relation to yourself, and to the trust I reposed in you.
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="nk-box-2 bg-dark-2">
                                <h4>Thus Much</h4>
                                Thus much I thought proper to tell you in relation to yourself, and to the trust I reposed in you.
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="nk-box-2 bg-dark-2">
                                <h4>Thus Much</h4>
                                Thus much I thought proper to tell you in relation to yourself, and to the trust I reposed in you. However, many of the most learned and
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="nk-box-2 bg-dark-2">
                                <h4>Thus Much</h4>
                                Thus much I thought proper
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="nk-box-2 bg-dark-2">
                                <h4>Thus Much</h4>
                                Thus much I thought proper to tell you in relation to yourself, and to the trust I reposed in you. However, many of the most learned and wise adhere to the new scheme of expressing themselves by things;
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="nk-box-2 bg-dark-2">
                                <h4>Thus Much</h4>
                                Thus much I thought proper to tell you in relation to yourself
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="nk-box-2 bg-dark-2">
                                <h4>Thus Much</h4>
                                Thus much I thought proper to tell you in relation to yourself
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="nk-box-2 bg-dark-2">
                                <h4>Thus Much</h4>
                                Thus much I thought proper to tell you in relation to yourself
                            </div>
                        </div>
                    </div>
                    {/* END: Content Grid */}
                </div>
                <div className="nk-gap-2" />
                {'{'}% endblock %{'}'}
        </div>
    )
}

export default Elements