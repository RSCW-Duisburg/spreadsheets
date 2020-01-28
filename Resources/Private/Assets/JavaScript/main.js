import DSN from './dsn';
import Renderer from './renderer';
import Spreadsheet from './spreadsheet';

class SpreadsheetDataInput {
    constructor(element) {
        this.element = element;

        // evaluate all wrapper and inputs
        this.sheetWrapper = this.element.querySelector('.spreadsheet-sheets');
        this.tableWrapper = this.element.querySelector('.spreadsheet-table');
        this.fileInput = this.element.querySelector('.spreadsheet-file-select');
        this.directionInput = this.element.querySelector('.spreadsheet-input-direction');
        this.resetInput = this.element.querySelector('.spreadsheet-reset-button');

        // data inputs
        this.originalDataInput = this.element.querySelector('input.spreadsheet-input-original');
        this.databaseDataInput = this.element.querySelector('input.spreadsheet-input-database');
        this.formattedDataInput = this.element.querySelector('input.spreadsheet-input-formatted');

        // calculate dsn spreadsheet data and build renderer
        this.dsn = new DSN(this.databaseDataInput.getAttribute('value'));
        this.spreadsheet = new Spreadsheet(this.dsn, JSON.parse(this.element.getAttribute('data-spreadsheet')));
        this.renderer = new Renderer(this.sheetWrapper, this.tableWrapper);

        // build sheet tabs and table for current selection
        this.updateSpreadsheet(true);
        this.initializeEvents();
    }

    initializeEvents() {
        // add events on other wrappers
        this.sheetWrapper.addEventListener('changeIndex', (event) => {
            // update sheet index and rebuild table
            this.dsn.index = event.detail.index;
            this.updateSpreadsheet(true);
        });
        this.tableWrapper.addEventListener('changeSelection', (event) => {
            // update selected range
            this.dsn.range = event.detail.start + ':' + event.detail.end;
            this.updateSpreadsheet();
        });

        // bind change of file selection
        this.fileInput.addEventListener('change', (event) => {
            this.dsn.fileUid = event.currentTarget.value;
            this.dsn.index = 0;
            this.dsn.range = '';
            this.updateSpreadsheet(true);
        });

        // bind click on column based extraction toggle
        this.directionInput.addEventListener('click', (event) => {
            const target = event.currentTarget;
            const targetParentNode = target.parentNode;
            this.dsn.direction = ((target.value || 'horizontal') === 'horizontal' ? 'vertical' : 'horizontal');

            // update target value and text
            target.setAttribute('value', this.dsn.direction);
            if (this.dsn.direction !== 'horizontal') {
                targetParentNode.querySelector('.direction-row').style.display = 'none';
                targetParentNode.querySelector('.direction-column').style.display = 'block';
            } else {
                targetParentNode.querySelector('.direction-column').style.display = 'none';
                targetParentNode.querySelector('.direction-row').style.display = 'block';
            }

            this.updateSpreadsheet();
        });

        // bind click on reset button
        this.resetInput.addEventListener('click', () => {
            this.dsn = new DSN(this.originalDataInput.getAttribute('value'));
            this.updateSpreadsheet(true);
        });
    }

    updateSpreadsheet(rendering = false) {
        // update data dsn information...
        this.spreadsheet.dsn = this.dsn;
        // ...and update rendering if required
        if (rendering === true) {
            this.renderer.update(this.spreadsheet, this.dsn);
        }

        // set select value to trigger browser showing correct item
        this.fileInput.value = this.dsn.fileUid;

        // update formatted and database input value
        let formatted = this.spreadsheet.getSheetName();
        let database = 'spreadsheet://' + this.dsn.fileUid + '?index=' + this.dsn.index;

        // check if table selection is enabled
        if (typeof this.tableWrapper !== 'undefined' && this.dsn.range.length > 0) {
            formatted += ' - ' + this.dsn.range;
            database += '&range=' + this.dsn.range;
        }
        // check if direction selection is enabled
        if (typeof this.directionInput !== 'undefined') {
            database += '&direction=' + this.dsn.direction;
        }

        this.formattedDataInput.setAttribute('value', formatted);
        this.databaseDataInput.setAttribute('value', database);
    }
}

// initialize all spreadsheet data inputs
document.querySelectorAll('.spreadsheet-input-wrap').forEach((element) => {
    new SpreadsheetDataInput(element);
});

