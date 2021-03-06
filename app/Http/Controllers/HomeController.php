<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Session;
use App\Models\Target;
use App\Statistics\Sessions;
use App\Support\DateIntervalFormatter;
use App\Support\DateTimeFormatter;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct(DateTimeFormatter $dateTimeFormatter, DateIntervalFormatter $dateIntervalFormatter, Sessions $sessions)
    {
        $this->middleware('auth');

        $this->dateTimeFormatter = $dateTimeFormatter;
        $this->dateIntervalFormatter = $dateIntervalFormatter;
        $this->sessions = $sessions;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $noClient = (object) [
            'name'             => 'No Client',
            'sessionsThisWeek' => $noClientSessions = Session::thisWeek()
                ->get()
                ->filter(function ($session) {
                    return $session->hasNoClient();
                })->values(),
            'openSprints' => [],
        ];

        $clients = Client::with(['projects.tasks.sessions'])
            ->get()
            ->filter(function ($client) {
                $client->append(['openSprints', 'sessionsThisWeek']);

                return $client->sessionsThisWeek->count() > 0;
            })->values();

        return Inertia::render('Home', [
            'thisWeeksWorkSessions'                    => $this->sessions->thisWeeksWorkSessions(),
            'thisWeeksTotal'                           => ($thisWeeksSessions = Session::thisWeek()->get())->totalDurationForHumans(),
            'totalSecondsRemainingForTargetsThisWeek'  => Target::whereForThisWeek()->get()->totalValueInSeconds() - $thisWeeksSessions->totalDurationInSeconds(),
            'clients'                                  => $noClientSessions->count() > 0 ? $clients->push($noClient) : $clients,
            'currentlyWorking'                         => $currentlyWorking = $this->sessions->currentlyWorking(),
            'currentSession'                           => $currentSession = $this->sessions->currentSession(),
            'totalSecondsThisWeek'                     => $thisWeeksSessions->totalDurationInSeconds(),
            'currentClientName'                        => $currentlyWorking ? $currentSession->getClient()->name ?? 'No Client' : null,
        ]);
    }
}
