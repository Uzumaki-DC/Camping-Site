'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { addDays, differenceInDays, format } from 'date-fns'
import { Calendar as CalendarIcon, ChevronDown, Minus, Plus, Search, Tent, Users } from 'lucide-react'
import type { DateRange } from 'react-day-picker'
import { locations, tanayRateOptions, contactInfo } from '@/lib/data'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

interface BookingWidgetProps {
  variant?: 'hero' | 'sticky' | 'page'
  className?: string
}

type StayType = 'dayTour' | 'overnight'
type VehicleOption = 'none' | 'motorcycle' | 'sedan-suv' | 'van-l300' | 'moto-camping'

const currency = new Intl.NumberFormat('en-PH', {
  style: 'currency',
  currency: 'PHP',
  maximumFractionDigits: 0,
})

function getRate(id: string) {
  const rate = tanayRateOptions.find((option) => option.id === id)
  if (!rate) {
    throw new Error(`Missing Tanay rate: ${id}`)
  }
  return rate
}

export function BookingWidget({ variant = 'hero', className }: BookingWidgetProps) {
  const [selectedLocation, setSelectedLocation] = useState(locations[0])
  const [stayType, setStayType] = useState<StayType>('overnight')
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 1),
  })
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [tents, setTents] = useState(1)
  const [vehicleOption, setVehicleOption] = useState<VehicleOption>('none')
  const [photoshoot, setPhotoshoot] = useState(false)
  const [selectedSite, setSelectedSite] = useState<string | null>(null)
  const [locationOpen, setLocationOpen] = useState(false)
  const [guestsOpen, setGuestsOpen] = useState(false)
  const [dateOpen, setDateOpen] = useState(false)
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

  const locationRef = useRef<HTMLDivElement>(null)
  const guestsRef = useRef<HTMLDivElement>(null)
  const isHero = variant === 'hero'
  const isSticky = variant === 'sticky'
  const isTanay = selectedLocation.id === 'tanay'
  const totalGuests = adults + children

  const nights = dateRange?.from && dateRange?.to ? Math.max(1, differenceInDays(dateRange.to, dateRange.from)) : 1
  const billableNights = stayType === 'overnight' ? nights : 1

  useEffect(() => {
    if (selectedLocation.accommodationTypes.length > 0 && !selectedSite) {
      setSelectedSite(selectedLocation.accommodationTypes[0].id)
    }
  }, [selectedLocation, selectedSite])

  useEffect(() => {
    if (stayType === 'dayTour' && dateRange?.from && (!dateRange.to || dateRange.to.getTime() !== dateRange.from.getTime())) {
      setDateRange({ from: dateRange.from, to: dateRange.from })
    }
    if (stayType === 'overnight' && dateRange?.from && (!dateRange.to || differenceInDays(dateRange.to, dateRange.from) < 1)) {
      setDateRange({ from: dateRange.from, to: addDays(dateRange.from, 1) })
    }
  }, [stayType, dateRange])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setLocationOpen(false)
      }
      if (guestsRef.current && !guestsRef.current.contains(event.target as Node)) {
        setGuestsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const pricing = useMemo(() => {
    if (!isTanay) {
      const selected = selectedLocation.accommodationTypes.find((site) => site.id === selectedSite)
      const siteTotal = selected ? selected.price * totalGuests * billableNights : 0
      return {
        subtotal: siteTotal,
        rows: selected
          ? [
              {
                label: `${selected.name} (${totalGuests} guest${totalGuests === 1 ? '' : 's'} x ${billableNights} night${billableNights === 1 ? '' : 's'})`,
                amount: siteTotal,
              },
            ]
          : [],
      }
    }

    const adultRate = getRate('adult')
    const kidRate = getRate('kid')
    const tentRate = getRate('tent-pitching')
    const adultUnit = stayType === 'dayTour' ? adultRate.dayTourPrice : adultRate.overnightPrice
    const kidUnit = stayType === 'dayTour' ? kidRate.dayTourPrice : kidRate.overnightPrice
    const tentUnit = stayType === 'dayTour' ? tentRate.dayTourPrice : tentRate.overnightPrice

    const rows: { label: string; amount: number }[] = []
    if (adults > 0) rows.push({ label: `Adults (${adults} x ${currency.format(adultUnit)})`, amount: adults * adultUnit })
    if (children > 0) rows.push({ label: `Kids 3-12 (${children} x ${currency.format(kidUnit)})`, amount: children * kidUnit })

    if (vehicleOption === 'moto-camping') {
      const moto = getRate('moto-camping')
      rows.push({
        label: `Moto camping package (${stayType === 'dayTour' ? 'day tour' : 'overnight'})`,
        amount: stayType === 'dayTour' ? moto.dayTourPrice : moto.overnightPrice,
      })
    } else {
      if (tents > 0) rows.push({ label: `BYOT tent pitching (${tents} x ${currency.format(tentUnit)})`, amount: tents * tentUnit })
      if (vehicleOption === 'motorcycle') rows.push({ label: 'Motorcycle parking', amount: getRate('motorcycle-parking').dayTourPrice })
      if (vehicleOption === 'sedan-suv') rows.push({ label: 'Sedan / SUV parking', amount: getRate('sedan-suv-parking').dayTourPrice })
      if (vehicleOption === 'van-l300') {
        const van = getRate('van-l300-car-camping')
        rows.push({ label: `Van / L300 car camping`, amount: stayType === 'dayTour' ? van.dayTourPrice : van.overnightPrice })
      }
    }

    if (photoshoot) rows.push({ label: 'Photoshoot fee', amount: getRate('photoshoot').dayTourPrice })
    return { subtotal: rows.reduce((sum, row) => sum + row.amount, 0), rows }
  }, [adults, billableNights, children, isTanay, photoshoot, selectedLocation, selectedSite, stayType, tents, totalGuests, vehicleOption])

  const handleCheckAvailability = () => {
    if (!dateRange?.from) {
      setDateOpen(true)
      return
    }
    setBookingDialogOpen(true)
  }

  const handleConfirmBooking = async () => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 900))
    setIsSubmitting(false)
    setBookingConfirmed(true)
  }

  const handleCloseDialog = () => {
    setBookingDialogOpen(false)
    setBookingConfirmed(false)
  }

  return (
    <>
      <div
        className={cn(
          'w-full',
          isHero && 'bg-background/95 backdrop-blur-sm',
          isSticky && 'bg-background shadow-lg',
          className,
        )}
      >
        <div className={cn('flex flex-col lg:flex-row items-stretch gap-0', isHero && 'max-w-6xl mx-auto')}>
          <div ref={locationRef} className={cn('relative flex-1 border-b lg:border-b-0 lg:border-r border-border', isSticky && 'min-w-[180px]')}>
            <div className="px-4 py-3">
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">Camp</label>
              <button onClick={() => setLocationOpen(!locationOpen)} className="flex items-center justify-between w-full text-left">
                <span className="text-sm font-medium">{selectedLocation.shortName}</span>
                <ChevronDown className={cn('h-4 w-4 text-muted-foreground transition-transform', locationOpen && 'rotate-180')} />
              </button>
            </div>
            {locationOpen && (
              <div className="absolute top-full left-0 right-0 bg-background border border-border shadow-lg z-50 max-h-[300px] overflow-y-auto">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => {
                      setSelectedLocation(location)
                      setSelectedSite(location.accommodationTypes[0]?.id || null)
                      setLocationOpen(false)
                    }}
                    className={cn('block w-full px-4 py-3 text-left text-sm hover:bg-muted transition-colors', selectedLocation.id === location.id && 'bg-muted')}
                  >
                    <span className="font-medium">{location.shortName}</span>
                    <span className="block text-xs text-muted-foreground mt-0.5">{location.tagline}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex-1 border-b lg:border-b-0 lg:border-r border-border">
            <div className="px-4 py-3">
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">Visit Type</label>
              <div className="grid grid-cols-2 gap-1 bg-muted p-1">
                {[
                  ['dayTour', 'Day Tour'],
                  ['overnight', 'Overnight'],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    onClick={() => setStayType(value as StayType)}
                    className={cn('px-3 py-1.5 text-xs font-medium transition-colors', stayType === value ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground')}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Popover open={dateOpen} onOpenChange={setDateOpen}>
            <PopoverTrigger asChild>
              <div className={cn('flex-[1.4] border-b lg:border-b-0 lg:border-r border-border cursor-pointer hover:bg-muted/50 transition-colors', isSticky && 'min-w-[240px]')}>
                <div className="px-4 py-3">
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">{stayType === 'dayTour' ? 'Visit Date' : 'Camp Dates'}</label>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground hidden sm:block" />
                    <span className="text-sm font-medium">
                      {dateRange?.from ? format(dateRange.from, 'MMM d, yyyy') : 'Select date'}
                      {stayType === 'overnight' && dateRange?.to ? ` - ${format(dateRange.to, 'MMM d')}` : ''}
                    </span>
                  </div>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <div className="p-4 border-b border-border">
                <p className="text-sm font-medium">
                  {stayType === 'dayTour' ? 'Day tour: 8:00 AM - 5:00 PM' : `${billableNights} night${billableNights === 1 ? '' : 's'} selected`}
                </p>
              </div>
              <Calendar
                mode={stayType === 'dayTour' ? 'single' : 'range'}
                defaultMonth={dateRange?.from}
                selected={stayType === 'dayTour' ? dateRange?.from : dateRange}
                onSelect={(value) => {
                  if (stayType === 'dayTour') {
                    setDateRange({ from: value as Date, to: value as Date })
                  } else {
                    setDateRange(value as DateRange)
                  }
                }}
                numberOfMonths={stayType === 'dayTour' ? 1 : 2}
                disabled={{ before: new Date() }}
              />
            </PopoverContent>
          </Popover>

          <div ref={guestsRef} className={cn('relative flex-1 border-b lg:border-b-0 lg:border-r border-border', isSticky && 'min-w-[140px]')}>
            <div className="px-4 py-3">
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">Guests</label>
              <button onClick={() => setGuestsOpen(!guestsOpen)} className="flex items-center justify-between w-full text-left">
                <span className="text-sm font-medium flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground hidden sm:block" />
                  {totalGuests} Guest{totalGuests !== 1 ? 's' : ''}
                </span>
                <ChevronDown className={cn('h-4 w-4 text-muted-foreground transition-transform', guestsOpen && 'rotate-180')} />
              </button>
            </div>
            {guestsOpen && (
              <div className="absolute top-full left-0 right-0 bg-background border border-border shadow-lg z-50 p-4 min-w-[260px]">
                {[
                  ['Adults', 'Ages 13+', adults, setAdults, 1, 80],
                  ['Kids', 'Ages 3-12', children, setChildren, 0, 80],
                ].map(([label, hint, value, setter, min, max]) => (
                  <div key={label as string} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
                    <div>
                      <p className="text-sm font-medium">{label as string}</p>
                      <p className="text-xs text-muted-foreground">{hint as string}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => (setter as React.Dispatch<React.SetStateAction<number>>)(Math.max(min as number, (value as number) - 1))}
                        disabled={(value as number) <= (min as number)}
                        className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{value as number}</span>
                      <button
                        onClick={() => (setter as React.Dispatch<React.SetStateAction<number>>)(Math.min(max as number, (value as number) + 1))}
                        disabled={(value as number) >= (max as number)}
                        className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
                <button onClick={() => setGuestsOpen(false)} className="w-full mt-3 py-2 text-sm font-medium text-primary hover:underline">
                  Done
                </button>
              </div>
            )}
          </div>

          <button onClick={handleCheckAvailability} className="bg-primary text-primary-foreground px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Estimate & Reserve</span>
            <span className="sm:hidden">Reserve</span>
          </button>
        </div>
      </div>

      <Dialog open={bookingDialogOpen} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-[680px] max-h-[90vh] overflow-y-auto">
          {!bookingConfirmed ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">Reservation Estimate</DialogTitle>
                <DialogDescription>
                  {selectedLocation.shortName} - {stayType === 'dayTour' ? 'Day tour' : `${billableNights} overnight night${billableNights === 1 ? '' : 's'}`}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 py-4">
                {isTanay ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <Label className="text-sm font-medium flex items-center gap-2">
                        <Tent className="h-4 w-4" />
                        Camp Setup
                      </Label>
                      <RadioGroup value={vehicleOption} onValueChange={(value) => setVehicleOption(value as VehicleOption)} className="space-y-2">
                        {[
                          ['none', 'BYOT / no vehicle camping'],
                          ['motorcycle', 'Motorcycle parking only'],
                          ['sedan-suv', 'Sedan / SUV parking only'],
                          ['van-l300', 'Van / L300 car camping'],
                          ['moto-camping', 'Moto camping package'],
                        ].map(([value, label]) => (
                          <Label key={value} className="flex items-center gap-3 rounded-sm border border-border p-3 cursor-pointer">
                            <RadioGroupItem value={value} />
                            <span className="text-sm">{label}</span>
                          </Label>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="space-y-4">
                      {vehicleOption !== 'moto-camping' && (
                        <div>
                          <Label className="text-sm font-medium mb-2 block">Number of BYOT tents</Label>
                          <div className="flex items-center gap-3">
                            <button onClick={() => setTents(Math.max(0, tents - 1))} className="h-9 w-9 border border-border flex items-center justify-center">
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-10 text-center font-medium">{tents}</span>
                            <button onClick={() => setTents(Math.min(20, tents + 1))} className="h-9 w-9 border border-border flex items-center justify-center">
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      )}
                      <Label className="flex items-start gap-3 rounded-sm border border-border p-3 cursor-pointer">
                        <Checkbox checked={photoshoot} onCheckedChange={(checked) => setPhotoshoot(Boolean(checked))} />
                        <span>
                          <span className="block text-sm font-medium">Add photoshoot fee</span>
                          <span className="block text-xs text-muted-foreground">PHP 1,000 plus entrance and parking fees</span>
                        </span>
                      </Label>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Label className="text-sm font-medium mb-3 block">Select Amadeo Campsite</Label>
                    <RadioGroup value={selectedSite || ''} onValueChange={setSelectedSite} className="space-y-3">
                      {selectedLocation.accommodationTypes.map((site) => (
                        <Label key={site.id} className="flex items-start gap-3 rounded-sm border border-border p-3 cursor-pointer">
                          <RadioGroupItem value={site.id} className="mt-1" />
                          <span className="flex-1">
                            <span className="flex justify-between gap-4">
                              <span className="font-medium">{site.name}</span>
                              <span className="font-medium">{currency.format(site.price)}</span>
                            </span>
                            <span className="block text-sm text-muted-foreground mt-1">
                              Up to {site.capacity} guests - {site.features.slice(0, 3).join(', ')}
                            </span>
                          </span>
                        </Label>
                      ))}
                    </RadioGroup>
                  </div>
                )}

                <div className="border-t border-border pt-4 space-y-2">
                  {pricing.rows.map((row) => (
                    <div key={row.label} className="flex justify-between gap-6 text-sm">
                      <span className="text-muted-foreground">{row.label}</span>
                      <span>{currency.format(row.amount)}</span>
                    </div>
                  ))}
                  <div className="flex justify-between font-medium pt-2 border-t border-border">
                    <span>Estimated total</span>
                    <span>{currency.format(pricing.subtotal)}</span>
                  </div>
                </div>

                <div className="rounded-sm bg-muted/60 p-4 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-1">Reservation terms</p>
                  <p>Send 50% downpayment via GCash to confirm. Remaining balance is due upon arrival. Free cancellation is available up to 48 hours before arrival.</p>
                </div>

                <Button onClick={handleConfirmBooking} disabled={isSubmitting || pricing.subtotal <= 0} className="w-full h-12 text-sm font-medium uppercase tracking-wider">
                  {isSubmitting ? 'Preparing request...' : `Prepare Reservation - ${currency.format(pricing.subtotal)}`}
                </Button>
              </div>
            </>
          ) : (
            <div className="py-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <DialogTitle className="text-xl mb-2">Reservation Request Ready</DialogTitle>
              <DialogDescription className="mb-6">
                Contact Windmills Camp Grounds to confirm this estimate and send your 50% GCash downpayment.
              </DialogDescription>
              <div className="bg-muted/50 rounded-sm p-4 mb-6 text-left text-sm">
                <p className="font-medium mb-2">Send your details to:</p>
                <p>Phone / Viber: {contactInfo.phoneDisplay}</p>
                <p>Email: {contactInfo.email}</p>
                <p>GCash: {contactInfo.gcash} - {contactInfo.gcashName}</p>
                <p className="font-medium text-foreground pt-2">Estimated total: {currency.format(pricing.subtotal)}</p>
              </div>
              <Button onClick={handleCloseDialog} className="w-full">
                Done
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
