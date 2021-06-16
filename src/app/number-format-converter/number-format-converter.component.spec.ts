import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberFormatConverterComponent } from './number-format-converter.component';

describe('NumberFormatConverterComponent', () => {
    let component: NumberFormatConverterComponent;
    let fixture: ComponentFixture<NumberFormatConverterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ NumberFormatConverterComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NumberFormatConverterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
