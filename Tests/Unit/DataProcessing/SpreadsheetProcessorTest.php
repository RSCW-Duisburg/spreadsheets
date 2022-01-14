<?php

namespace Hoogi91\Spreadsheets\Tests\Unit\DataProcessing;

use Hoogi91\Spreadsheets\DataProcessing\AbstractProcessor;
use Hoogi91\Spreadsheets\DataProcessing\SpreadsheetProcessor;
use Hoogi91\Spreadsheets\Domain\ValueObject\ExtractionValueObject;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PHPUnit\Framework\MockObject\MockObject;

/**
 * Class SpreadsheetProcessorTest
 * @package Hoogi91\Spreadsheets\Tests\Unit\DataProcessing
 */
class SpreadsheetProcessorTest extends AbstractProcessorTest
{

    protected function getDataProcessor(): AbstractProcessor
    {
        return new SpreadsheetProcessor(
            $this->readerService,
            $this->extractorService,
            $this->styleService,
            $this->fileRepository,
            $this->pageRendererMock
        );
    }

    /**
     * @param MockObject|Spreadsheet $spreadsheetMock
     * @return void
     */
    protected function validInputExpectations(MockObject $spreadsheetMock): void
    {
        $this->extractorService->expects(self::once())
            ->method('getDataByDsnValueObject')
            ->willReturn(
                ExtractionValueObject::create($spreadsheetMock, ['body-data-mocked'], ['head-data-mocked'])
            );
    }

    protected function invalidInputExpectations(): void
    {
        $this->extractorService->expects(self::never())->method('getDataByDsnValueObject');
    }

    public function processingDataProvider(): array
    {
        return [
            [
                // empty value should result in unprocessed input data
                ['value' => ''],
                self::INPUT_DATA,
            ],
            [
                // invalid value should also result in unprocessed input data
                ['value' => 'file:'],
                self::INPUT_DATA,
            ],
            [
                // result should contain a custom named variable with extraction result
                // page renderer will be checked if it is NOT being called
                [
                    'value' => 'file:123|1!A1:B2',
                    'options.' => [
                        'ignoreStyles' => 1,
                        'additionalStyles' => '.test{color: "#fff"}',
                    ],
                    'as' => 'someOtherVar',
                ],
                self::INPUT_DATA + [
                    'someOtherVar' => [
                        'sheetIndex' => 1,
                        'bodyData' => ['body-data-mocked'],
                        'headData' => ['head-data-mocked'],
                    ]
                ],
            ],
            [
                // result should contain default named result variable with extraction result
                // page renderer will be checked if it HAS being called
                [
                    'value' => 'file:123|2!A1:B2',
                    'options.' => ['additionalStyles' => '.test{color: "#fff"}',]
                ],
                self::INPUT_DATA + [
                    'spreadsheets' => [
                        'sheetIndex' => 2,
                        'bodyData' => ['body-data-mocked'],
                        'headData' => ['head-data-mocked'],
                    ]
                ],
            ],
        ];
    }
}
